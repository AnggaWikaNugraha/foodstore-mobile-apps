import * as React from 'react';
import store from './src/redux';
import {Provider} from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Router/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;