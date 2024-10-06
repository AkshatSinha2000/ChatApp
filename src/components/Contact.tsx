import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import family from '../assets/fonts/index';
const width = Dimensions.get('screen').width;

const Contact = ({onPress, item}) => {
  return (
    <TouchableOpacity style={styles.FlatListContainer} onPress={onPress}>
      <View style={styles.container2}>
        <View style={[styles.profileImg, {backgroundColor: item.color}]}>
          <Text style={styles.text1}>{item.profileImg}</Text>
        </View>
        <View>
          <Text style={styles.text2}>{item.name}</Text>
          <Text style={styles.text3}>You: i don't remember anything</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileImg: {
    borderRadius: 100,
    padding: 15,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Platform.OS === 'ios'? width > 400 ? '80%' : '95%': '85%',
  },

  text1: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: family.Bold,
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
    fontFamily:Platform.OS === 'ios'? family.thin: family.medium,
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
