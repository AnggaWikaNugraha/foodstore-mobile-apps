import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../pages/auth/SplashScreen';
import OnBoarding from '../pages/auth/onBoarding';
import Register from '../pages/auth/Register';

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
    {/* auth */}
    
    </Stack.Navigator>
  )
}

export default Router;