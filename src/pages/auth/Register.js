import React from 'react';
import { StyleSheet,  Text,  Button, TextInput,  View} from 'react-native';
import { colors } from '../../utils/colors';
import Layout from '../layout';
import { Formik } from 'formik';
import Gap from '../../utils/Gap';

const Register = () => {
  
  return (
    <Layout title='Register'>
      <View style={styles.wrapper}>
      <Formik
        initialValues={{ 
          full_name : '',
          email: '',
          role : '',
          password : ''
          }}

        onSubmit={values => console.log(values)}

      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Full name</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('full_name')}
                onBlur={handleBlur('full_name')}
                value={values.full_name}
              />
            </View>
            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Email</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Role</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('role')}
                onBlur={handleBlur('role')}
                value={values.role}
              />
            </View>

            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Password</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <Button onPress={handleSubmit} title="Submit" />
          </>
        )}
      </Formik>

      </View>
    </Layout>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    width : '100%',
    paddingTop : 30,
    paddingHorizontal : 30,
  },
  formGrup : (marginVertical) => ({
    marginVertical : marginVertical ? marginVertical : 0
  }),
  TextInput : (
    borderWidth,
    padding,
    borderColor,
    borderRadius,
    height
  ) => ({
    borderWidth : borderWidth ? borderWidth : 1,
    paddingHorizontal :  padding ? padding : 10,
    borderColor : borderColor ? borderColor : colors.border.blue,
    borderRadius : borderRadius ? borderRadius : 5,
    height : height ? height : 40,
  }),
  versionText: (size, color, weight) =>  ({
    fontSize: size,
    color : color ? color : colors.text.blue
  }),
});