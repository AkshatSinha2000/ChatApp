import { Dimensions, Platform, StyleSheet } from "react-native";
import family from "../../assets/fonts";
const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#F8F9F9',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  chatContainer: {
    flex: 1,
    backgroundColor: '#E7EDF3',
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    height: 20,
    width: 20,
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  profileImg: {
    borderRadius: 100,
    padding: 13,
  },
  profileText: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily:family.Bold
  },
  userDetails: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 2,
    fontFamily:family.Bold
  },
  userStatus: {
    fontSize: 13,
    color: '#838D95',
    fontWeight: '600',
    fontFamily:Platform.OS === 'ios' ? family.thin : family.medium
  },
  notificationContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  notificationIcon: {
    height: 20,
    width: 20,
  },
  plusmessage: {
    height: 22,
    width: 22,
  },
  sendicon: {
    height: 40,
    width: 40,
  },
  RBContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    borderRadius: 30,
    // paddingTop: 20,
    flex: 1,
  },

  modalOverlay: {
    // flex: 1,
    height:(width > 400)? '70%': '90%',
  },
  modalDelete: {
    justifyContent:'center',
  },
  modalContainer: {
    marginHorizontal:15,
    paddingVertical:15,
    borderRadius:10,
    marginVertical:10,
    paddingHorizontal:20,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer2:{
    flex:1,
    paddingTop:30,
    borderTopStartRadius:25,
    borderTopEndRadius:25,
    backgroundColor:'white',

  },
  modalDeleteContainer:{
    marginHorizontal:20,
    paddingHorizontal:20,
    paddingVertical:15,
    borderRadius:10,
    backgroundColor:'white',
  },
  emojiContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:35,
  },
  
  optioncontainer:{
    paddingHorizontal:30,
  },
  modalMessage:{
    fontSize: 15,
    color:'#6A7985',
    textAlign:'center',
    fontWeight: '300',
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalButton:{
    fontSize: 15,
    marginVertical: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',
    backgroundColor:'red',
    paddingHorizontal:30,
    paddingVertical:15,
    borderRadius:10
  },
  modalButtonText:{
    color:'white'
  },
});


export default styles;