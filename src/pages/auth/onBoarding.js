import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import { colors } from '../../utils/colors';
import Gap from '../../utils/Gap';
import { useNavigation } from '@react-navigation/core';

const OnBoarding = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.version}>
          <Text style={styles.versionText(16)}>Hallo Selamat Datang</Text>
          <Gap height={10}/>
          <View style={{flexDirection : 'row'}}>
            <Button
              onPress={()=> navigation.navigate('Register')}
              borderRadius={3}
              paddingHorizontal={20}
              paddingVertical={5}
              backgroundColor={colors.button.blue}
              title='Register'/>
              <Gap width={10}/>
              <Button
              onPress={()=> navigation.navigate('Login')}
              borderRadius={3}
              paddingHorizontal={20}
              paddingVertical={5}
              backgroundColor={colors.button.blue}
              title='Login'/>
          </View>
        </View>
        
    </View>
  );
};

export default OnBoarding;

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