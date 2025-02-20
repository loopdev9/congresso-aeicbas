const googleStorage = require('@google-cloud/storage');
const Multer = require('multer');

const storage = googleStorage({
  projectId: "congresso-aeicbas",
  keyFilename: "congresso-aeicbas-key.json"
});

const bucket = storage.bucket("congresso-aeicbas.appspot.com");

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
  }
});

module.exports = { multer: multer, bucket: bucket, storage: firebase.storage() };

// app.listen(3000, () => {
//   console.log('App listening to port 3000');
// });

/**
 * Adding new file to the storage
 */
// app.post('/upload', multer.single('file'), (req, res) => {
//   console.log('Upload Image');

//   let file = req.file;
//   if (file) {
//     uploadImageToStorage(file).then((success) => {
//       res.status(200).send({
//         status: 'success'
//       });
//     }).catch((error) => {
//       console.error(error);
//     });
//   }
// });

/**
 * Upload the image file to Google Storage
 * @param {File} file object that will be uploaded to Google Storage
 */
// const uploadImageToStorage = (file) => {
//   return new Promise((resolve, reject) => {
//     if (!file) {
//       reject('No image file');
//     }
//     let newFileName = `${file.originalname}_${Date.now()}`;

//     let fileUpload = bucket.file(newFileName);

//     const blobStream = fileUpload.createWriteStream({
//       metadata: {
//         contentType: file.mimetype
//       }
//     });

//     blobStream.on('error', (error) => {
//       reject('Something is wrong! Unable to upload at the moment.');
//     });

//     blobStream.on('finish', () => {
//       // The public URL can be used to directly access the file via HTTP.
//       const url = format(`https://storage.googleapis.com/${bucket.name}/${fileUpload.name}`);
//       resolve(url);
//     });

//     blobStream.end(file.buffer);
//   });
// }