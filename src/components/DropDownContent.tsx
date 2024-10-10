import { StyleSheet, Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import {family} from '../assets';


interface DropDownContentProps {
  icon: ImageSourcePropType; 
  text: string;        
  stylesme?: object;        
  deletetext?: boolean;  
  onPress?: () => void | null;       
}

const DropDownContent = ({ icon, text, stylesme, deletetext, onPress }:DropDownContentProps) => {
  return (
    <TouchableOpacity style={styles.RBContainer2} onPress={deletetext ? onPress : null}>
      <View>
        <Image source={icon} style={stylesme ? stylesme : styles.image} />
      </View>
      <Text style={[styles.RBtext, { color: deletetext ? 'red' : 'black' }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default DropDownContent;

const styles = StyleSheet.create({
  RBContainer2: {
    paddingVertical: 23,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  RBtext: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: family.medium,
  },
  image: {
    height: 24,
    width: 23,
    marginLeft: 2,
  },
});
