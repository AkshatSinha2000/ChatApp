import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  text: {fontSize: 20},
});
