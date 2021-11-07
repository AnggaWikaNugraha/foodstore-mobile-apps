import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SplashScreen from "../pages/auth/SplashScreen";
import OnBoarding from "../pages/auth/onBoarding";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Beranda from "../pages/user/beranda";
import { colors } from "../utils/colors";
import Profile from "../pages/user/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      {/* auth */}
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* akhir auth */}

      {/* user */}
      <Stack.Screen
        name="User"
        component={TabUser}
        options={{ headerShown: false }}
      />
      {/* akhir user */}
    </Stack.Navigator>
  );
};

const TabUser = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.tab.active,
        tabBarInactiveTintColor: colors.tab.innactive,
      }}
    >
      <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Aktivitas"
        component={Beranda}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Pembayaran"
        component={Beranda}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Kotak Masuk"
        component={Beranda}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Akun"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Router;
