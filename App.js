import * as React from 'react';
import store from './src/redux/index';
import {Provider, useSelector} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

const DebugState = () => {
  const state = useSelector(state => state)
  console.log(state)
  return(<></>)
}

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Router/>
      <DebugState/>
      <FlashMessage position="top" />
      </NavigationContainer>
    </Provider>
  );
}

export default App;