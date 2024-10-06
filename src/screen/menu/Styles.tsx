import {Dimensions, Platform, StyleSheet} from 'react-native';
import family from '../../assets/fonts/index';
const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  safeareaview: {
    backgroundColor: '#2A7BBB',
  },
  container1: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    flexDirection: 'row',
  },
  container3: {
    backgroundColor: '#3E88C2',
    borderRadius: 10,
    padding: 10,
  },
  backarrow: {
    height: 20,
    width: 20,
  },
  container4: {
    marginLeft: 10,
  },
  text1: {
    fontSize: 18,
    marginBottom: 3,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: family.Bold,

    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
  },
  text2: {
    fontSize: 13,
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily:Platform.OS === 'ios' ? family.thin : family.medium,

    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
  },
  container5: {
    backgroundColor: '#3E88C2',
    borderRadius: 10,
    padding: 10,
    shadowOpacity: 1.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
  },
  bell: {
    height: 20,
    width: 20,
  },
  search: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  container6: {
    flex: 1,
    backgroundColor: '#E7EDF3',
  },
  container7: {
    flexWrap: 'wrap',
    alignItems:'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 19,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    paddingHorizontal: 15,

    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
  },
  inputcontainer: {
    width: '90%',
  },
  nochat: {
    height: 190,
    width: 190,
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text3: {
    color: '#FFFFFF',
    fontSize: 16,
  },

  RBContainer: {
    paddingHorizontal: 24,
    borderRadius: 30,
    paddingTop: 20,
    flex: 1,
  },
  RBContainer2: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  RBtext: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: Platform.OS === 'ios' ? '300' : '500',
    fontFamily:family.medium
  },
  plus: {
    height: 25,
    width: 25,
  },
  FlatListMainContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  FlatListContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBlockColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileImg: {
    borderRadius: 100,
    padding: 15,
  },
  flattext1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  flattext2: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  flattext3: {
    fontSize: 13,
    fontWeight: '400',
    color: '#85929C',
  },
  cross: {
    marginHorizontal: 20,
    height: 18,
    width: 18,
  },
  Noresult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noresultimage: {
    height: 200,
    width: 180,
  },
  flatcontainer2: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  addchat: {
    position: 'absolute',
    height: 100,
    width: 90,
    right: 0,
    bottom: 0,
  },
  // addchatcontainer:{
  //   position:'absolute',
  //   le
  //   padding:0,
  //   backgroundColor:'red'
  // },

  container8:{flex: 1, justifyContent: 'center', alignItems: 'center'}
});

export default styles;
