import { useNavigation } from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import { colors } from '../../utils/colors';
import { getData } from '../../utils/storage';

const {height} = Dimensions.get('window');

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      
      getData('stateLogin')
      .then(res => {
        if (res.roles === 'admin') {
          console.log('admin')
        } else {
          navigation.reset({index: 0, routes: [{name: 'User'}]});
        }
      }).catch(e => navigation.navigate('OnBoarding'))
      
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.version}>
          <Text style={styles.versionText(16)}>FoodStore Mobile</Text>
          <Text style={styles.versionText(12)}>Version 1.0</Text>
        </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection : 'column',
    backgroundColor: colors.background,
  },
  version : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionText: (size, color, weight) =>  ({
    fontSize: size,
  }),
});