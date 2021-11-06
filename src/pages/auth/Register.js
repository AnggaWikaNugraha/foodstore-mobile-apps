import React from 'react';
import { StyleSheet,  Text,  Button, TextInput,  View} from 'react-native';
import { colors } from '../../utils/colors';
import Layout from '../layout';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  full_name : Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password : Yup.string()
    .required('Required'),
  K_password : Yup.string()
    .required('Required')
});

const Register = () => {
  
  return (
    <Layout title='Register'>
      <View style={styles.wrapper}>
      <Formik
        initialValues={{ 
          full_name : '',
          email: '',
          role : '',
          password : '',
          K_password : ''
        }}

        validationSchema={SignupSchema}
        validate={(values) => {
          const error = {}
            if (values.password !== values.K_password){
              error.K_password = 'Password not matching'
            }
          return error;
        }}
        
        onSubmit={values => console.log(values)}

      >
        {({ handleChange, handleBlur, handleSubmit, values,errors }) => (
          <>
            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Full name</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('full_name')}
                onBlur={handleBlur('full_name')}
                value={values.full_name}
              />
              {errors.full_name && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.full_name}
                        </Text>
                      )}
            </View>
            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Email</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.email}
                        </Text>
                      )}
            </View>

            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Password</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
               {errors.password && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.password}
                        </Text>
                      )}
            </View>

            <View style={styles.formGrup(10)}>
              <Text style={styles.versionText(13)}>Konfirmasi Password</Text>
              <TextInput
                style={styles.TextInput()}
                onChangeText={handleChange('K_password')}
                onBlur={handleBlur('K_password')}
                value={values.K_password}
              />
              {errors.K_password && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                          {errors.K_password}
                        </Text>
                      )}
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
    paddingTop : 10,
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