import { Dimensions, Platform, StyleSheet } from "react-native";
import {family} from '../../assets/index'
const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#E7EDF3',
    flex: 1,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    marginVertical: 7,
  },
  container2: {
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  container3: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 13,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? 14 : 0,
    paddingHorizontal: 13,
    marginLeft: 10,
    width: '85%',
  },
  backarrow: {
    height: 20,
    width: 20,
  },
  inputText: {
    width: '85%',
  },
  FlatListMainContainer: {
    flex:1,
    marginHorizontal: 20,
    marginTop: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
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
  cross: {
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 15,
    height: 18,
    width: 18,
  },
  FlatListContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBlockColor: 'lightgrey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },
  profileImg: {
    borderRadius: 25,
    // padding: 15,
    height:50,
    width:50,
    justifyContent:'center',
    alignSelf:'center'
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
    width: Platform.OS === 'ios' ? (width > 400 ? '20%' : '25%') : '20%',
  },
  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: family.Bold,
    justifyContent:'center',
    alignSelf:'center'
  },
  text2: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: family.Bold,
  },
  text3: {
    fontSize: 13,
    fontWeight: '400',
    color: '#85929C',
    fontFamily: Platform.OS === 'ios' ? family.medium : family.medium,
    
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
});

export default styles;
