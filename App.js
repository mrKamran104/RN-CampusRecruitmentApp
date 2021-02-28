/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Root } from "native-base";
import React from 'react';
import App from './src/containers/App';
import { Provider } from 'react-redux';
import store from './src/store';

const app: () => React$Node = (props) => {
  return (
    <Root>
      <Provider store={store}>
        <App />
      </Provider>
    </Root>
  );
};

export default app;
