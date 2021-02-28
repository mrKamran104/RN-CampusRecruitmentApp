import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppDrawerNavigator from '../../routers/AppDrawerNavigator';
import { DrawerAnimationProvider } from '../../contexts/DrawerAnimationContext';
import { connect } from 'react-redux';
import StartRouter from './../../routers/AppStackNavigator/StartRouter';

function App(props) {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
      {/* <AppStackNavigator> */}

      {!props.login ? <StartRouter /> :
        <DrawerAnimationProvider>
          <NavigationContainer>
            <AppDrawerNavigator />
          </NavigationContainer>
        </DrawerAnimationProvider>
      }
      {/* </AppStackNavigator> */}
    </>
  );
}

function mapStateToProp(state) {
  return ({
    login: state.root.login
  })
}

export default connect(mapStateToProp)(App);
