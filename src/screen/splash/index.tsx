import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import styles from './styles'
import { icon } from '../../assets';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;


export function Splash() {
  const navigation  = useNavigation()
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
      navigation.reset({
        index : 0,
        routes:[{name  : 'BottomNavigation'}]
      })
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

