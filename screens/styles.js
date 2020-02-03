import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const mainBlue = "rgba(32, 45, 63, 1)";
const mainGrey = "rgba(76, 72, 75, 1)";
const darkGrey = "rgba(246, 242, 245, 1)";
const lightBackground = "rgba(246, 244, 244, 1)";
const lightText = "rgba(158, 157, 157, 1)";
const whiteblue = "rgba(236, 243, 249, 1)"
export default StyleSheet.create({

  /** Container Styles */

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  fullContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  navbarContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    height: 120,
    paddingTop: 60,
    paddingRight: 33,
    paddingLeft: 5

  },

  navbarAuth: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    height: 120,
    paddingTop: 60,
    paddingRight: 33,
    paddingLeft: 5

  },



  graphContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 230
  },

  inlineContainer: {
    flexDirection: 'row'
  },

  spaceAround: {
    justifyContent: 'space-around',
    width: '100%'
  },

  dayBoxesView: {
    marginBottom: 10
  },

  eventBox: {
    width: 0.8 * width,
    marginRight: 10,
    backgroundColor: mainBlue,
    padding: 10
  },

  eventBoxDescription: {
    width: 0.8 * width,
    marginRight: 10,
    backgroundColor: mainBlue,
    padding: 10,
    borderRadius: 15,
    color: "white"
  },

  questionBoxDescription: {
    width: 0.8 * width,
    marginVertical: 4,
    marginRight: 10,
    backgroundColor: lightBackground,
    padding: 10,
    borderRadius: 15,
  },

  timetableBox: {
    // width: width,
    alignSelf: 'stretch',
    marginVertical: 10,
    flexDirection: "row",
    marginVertical: 5,
  },

  favouritesBox: {
    // width: width,
    //alignSelf: 'stretch',
    marginVertical: 10,
    flexDirection: "row",
    marginVertical: 5,
  },

  /** END Container Styles */

  /** Text Styles */

  label: {
    color: mainBlue,
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },

  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },

  Navbutton: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20

  },

  separator: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 30,
    color: "rgba(226, 233, 239, 1)"
  },

  linkButton: {

    marginTop: 10,
    marginBottom: 10,
    color: mainBlue,
    fontSize: 20

  },

  dayBoxText: {
    color: mainGrey
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: mainBlue,
    paddingVertical: 15,
    alignSelf: 'center',
  },

  title2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: "white",
    marginBottom: 15
  },

  favouritesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: mainBlue,
    marginBottom: 15
  },


  favouritesText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: mainBlue,
    marginBottom: 15
  },

  eventDescription: {
    fontSize: 15,
    color: "white"
  },

  eventHour: {
    maxWidth: 0.2 * width,
    paddingTop: 5,
    paddingHorizontal: 5,
  },

  /** END Text Styles */

  /** Background */

  mainBgColor: {
    backgroundColor: mainBlue
  },

  /** END Background */

  /** Input Styles */

  authInput: {
    width: 300,
    height: 40,
    backgroundColor: lightBackground,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    color: lightText,
    margin: 5,
    textAlign: 'center',
  },

  questionInput: {
    width: "100%",
    height: 150,
    backgroundColor: whiteblue,
    color: mainBlue,
    textAlignVertical: 'top',
    borderTopColor: mainBlue,
    borderBottomColor: mainBlue
  },
  /** END Input Styles */

  /** Button Styles */

  mainBlueButton: {
    width: 220,
    height: 40,
    backgroundColor: mainBlue,
    borderRadius: 20,
    color: lightText,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
  },

  smallBlueButton: {
    width: 40,
    height: 40,
    backgroundColor: mainBlue,
    borderRadius: 20,
    color: lightText,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 10
  },

  dayBoxSelected: {
    backgroundColor: mainGrey,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: mainGrey
  },


  dayBox: {
    borderColor: mainGrey,
    paddingHorizontal: 5,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 3,
  },

  /** END Button Styles */


  /** Link Styles */

  authLink: {
    textDecorationLine: 'underline',
    marginBottom: 20,
    fontSize: 18
  },

  /** END Link Styles */

  /** Transformations */

  turn180: {
    transform: [{ rotate: '180deg' }]
  },

  /** END Transformations */

  /** Images Styles */

  logo: {
    width: '35%',
    height: 60
  },

  icon: {
    width: 25,
    height: 25,
    alignSelf: 'center'
  },

  sponsorImg: {
    width: 180,
    height: 100,
    marginHorizontal: 10
  }

  /** END Images Styles */


});