import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {colors} from './colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"/>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: colors.text.grey,
  },
});