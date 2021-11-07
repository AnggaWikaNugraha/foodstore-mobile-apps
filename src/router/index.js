import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/auth/SplashScreen';
import OnBoarding from '../pages/auth/onBoarding';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import Beranda from '../pages/user/beranda';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
    {/* auth */}
      <Stack.Screen 
        name='Splash'
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name='OnBoarding'
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name='Register'
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name='Login'
        component={Login}
        options={{headerShown: false}}
      />
    {/* akhir auth */}

    {/* user */}
    <Stack.Screen 
        name='Beranda'
        component={Beranda}
        options={{headerShown: false}}
      />
    {/* akhir user */}
    
    </Stack.Navigator>
  )
}

export default Router;