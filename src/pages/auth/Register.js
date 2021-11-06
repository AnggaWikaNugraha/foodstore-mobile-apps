import React from 'react';
import { StyleSheet,  Text,  TextInput,  View} from 'react-native';
import { colors } from '../../utils/colors';
import Layout from '../layout';

const Register = () => {
  
  return (
    <Layout 
    title='Register'
    >
      <View style={styles.wrapper}>
       
       

      </View>
    </Layout>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    width : '100%',
    paddingTop : 10,
    paddingHorizontal : 30
  }
});