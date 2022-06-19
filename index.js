/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import App from './App';
import {store} from './src/store/store';
import {injectStore} from './src/components/http';
injectStore(store);
export default function Project() {
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{
          colors: {
            background: 'black',
          },
        }}>
        <App />
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Project);
