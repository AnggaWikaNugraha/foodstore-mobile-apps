import React from 'react';
import { StyleSheet,  Text,  Button, TextInput,  View} from 'react-native';
import { colors } from '../../utils/colors';
import Layout from '../layout';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { actionPostItems } from '../../redux/action/auth/login';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password : Yup.string()
    .min(9, 'Password must be length 9')
    .required('Required'),
});

const Login = () => {
  
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <Layout title='Login'>
      <View style={styles.wrapper}>
      <Formik
        initialValues={{ 
          email: '',
          password : ''
        }}

        validationSchema={SignupSchema}
        onSubmit={values => dispatch(actionPostItems(values,navigation))}

      >
        {({ handleChange, handleBlur, handleSubmit, values,errors }) => (
          <>
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

            <Button onPress={handleSubmit} title="Submit" />
          </>
        )}
      </Formik>

      </View>
    </Layout>
  );
};

export default Login;

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