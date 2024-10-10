import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourites</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 20},
});
