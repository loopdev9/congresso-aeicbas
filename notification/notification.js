const { db, auth } = require('../config');
// const usersRef = db.collection('User');

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

//  TO get Token of Device 

getDevicetoken = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }        
  if (finalStatus !== 'granted') {
    return;
  }
  try {
    let token = await Notifications.getExpoPushTokenAsync();
    return token
  
  } catch (error) {
    console.log(error);
  }
}

// when user is login this function is start to run

const getfirebaseDdata = async() => {
  let currentuserId;

  // to check login user 

  await auth.onAuthStateChanged((user)=> {
    if (user) {
      // get user UID
      currentuserId = user.uid
    }
  });


    setInterval(() => {
      const todayDate = new Date()
      const todayDate1 = todayDate.toDateString();


      // I get data from Question collection if you want any other collection you just copy and pest this function


      const questionRef = db.collection('Question');
      // get those ary who same user Id
      questionRef.where("user" , "==" , currentuserId).get().then(querySnapshot => {
      querySnapshot.forEach((doc) => {
      let data = doc.data();
      var myDate = new Date(data.date.seconds*1000);
      var formatedTime=myDate.toDateString();

      // formatedTime  = date gete from firebase of Question collection, 
       //and tody date is matched and in same object sent is false then this condistion will be truee
      if (formatedTime === todayDate1 && !data.sent) {
        // sendPushNotification execute
         sendPushNotification(data.lecture , data.body);


         // update sent property to true
        questionRef.doc(doc.id).update({
          sent : true
        })
      }
      });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error.message);
    })
}, 78700);
}


sendPushNotification = (title , body) => {
  let deviceToken = getDevicetoken()
  setTimeout(()=>{
  fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      to: deviceToken,
      sound: 'default',
      title: title,
      body: body
    })
  });
}, 500);
};



export {getfirebaseDdata , getDevicetoken}