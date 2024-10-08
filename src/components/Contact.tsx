import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { family } from '../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;


interface ContactItem {
  name: string;
  profileImg: string; 
  color: string;
}


interface ContactProps {
  onPress: () => void;
  item: ContactItem;
  showlast : string;
}

const Contact = (props:ContactProps) => {
const {onPress, item , showlast}=props
  const [lastText, setlastText] = useState('')
  const name = item.name.split(' ');
  const name2 = name[0][0] + name[1][0]
  

  useEffect(() => {
    const handlemessage =async() =>{
      const storedMessages = await AsyncStorage.getItem(`messages_${item.id}`);
      const chat: ChatUser[] = JSON.parse(storedMessages);
      setlastText(chat[0].text)
    }
    handlemessage();
  }, []);

  return (
    <TouchableOpacity style={styles.FlatListContainer} onPress={onPress}>
      <View style={styles.container2}>
        <View style={[styles.profileImg, { backgroundColor: item.color }]}>
          <Text style={styles.text1}>{name2}</Text>
        </View>
      </View>
        <View >
          <Text style={styles.text2}>{item.name}</Text>
          {showlast &&<Text style={styles.text3}>{lastText ? lastText : 'Start Chat'}</Text>}
        </View>
    </TouchableOpacity>
  );
};

export default Contact;

const styles = StyleSheet.create({
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
