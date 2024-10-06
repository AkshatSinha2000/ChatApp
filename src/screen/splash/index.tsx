import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import family from '../../assets/fonts';
import icon from '../../assets/icon/index';
import {NavigationProp} from '@react-navigation/native';

const width = Dimensions.get('screen').width;

interface SplashProps {
  navigation: NavigationProp<any>;
}

export function Splash({navigation}) {
  const leftValue = useState(new Animated.Value(0))[0];
  const TextValue = useState(new Animated.Value(0))[0];

  function moveImage() {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }
  function moveText() {
    Animated.timing(TextValue, {
      toValue: 100,
      duration: 30000,
      useNativeDriver: false,
    }).start();
  }

  useEffect(() => {
    moveImage();
    moveText();
    setTimeout(() => {
      navigation.navigate('BottomNavigation', 'Menu');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.Quivio}>
        <Animated.Image
          source={icon.Splashimage}
          style={[styles.image,{ padding: leftValue, }]}
        />
        <Animated.Text
          style={[styles.text,{ opacity: TextValue, }]}>
          ChatApp
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height: 20, 
    width: 20,
    marginBottom: 20,
  },
  text:{
    fontSize: 24,
    fontFamily: family.Bold
  },

  Quivio: {
    padding: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
