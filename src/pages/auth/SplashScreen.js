import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
// import {colors, fonts, getData} from '../../utils';

const {height} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
    //   getData('USER').then(res => {
    //     if (res) {
    //       if (res.role == 'patient') {
    //         navigation.reset({index: 0, routes: [{name: 'PasienApp'}]});
    //       } else navigation.reset({index: 0, routes: [{name: 'DoctorApp'}]});
    //     } else navigation.reset({index: 0, routes: [{name: 'OnBoarding'}]});
    //   });
    }, 1000);
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
    // backgroundColor: colors.background,
  },
  batik: {
    width: 297.59,
    height: 280,
  },
  version : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionText: (size, color, weight) =>  ({
    // color: color,
    fontSize: size,
    // fontFamily: fonts.Nunito[weight],
  }),
});