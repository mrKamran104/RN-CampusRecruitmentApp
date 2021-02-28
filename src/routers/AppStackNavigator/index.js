/**
 * borderRadius: new Animated.Value(100)
 *
 * Animated.timing(this.state.borderRadius, {
      toValue: 16,
      duration: 1200,
      useNativeDriver: true
    }).start();
 *
 *
 * <Animated.View
          style={{
    borderRadius: this.state.borderRadius,
*/
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'native-base';
import * as React from 'react';
import Animated from 'react-native-reanimated';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import DetailsScreen from '../../screens/DetailsScreen';
import HomeScreen from '../../screens/HomeScreen';
import AboutScreen from './../../screens/AboutScreen';
import ProfileScreen from './../../screens/ProfileScreen';
import JobPost from './../../screens/JobPost/Jobpost';


const Stack = createStackNavigator();

const AppStackNavigator = (props) => {
  const { navigation } = props;
  const { progress } = React.useContext(DrawerAnimationContext);

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.73],
  });

  const backgroundScreen = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -85],
  });

  const translateXContainer = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 0.4],
  });

  console.log("jj", props.login)

  return (
    <>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: 'center',
          transform: [
            { scale: scale },
            // { rotate: '-5deg' },
            { translateX: translateXContainer },
            // { translateX: translateX },
          ],
          // shadowColor: '#000000',
          // shadowOffset: { height: 3, width: -3 },
          // shadowOpacity: opacity,
          // shadowRadius: 20,
          // overflow: 'visible',
        }}>
        <Animated.View
          style={{
            position: 'absolute',
            height: '100%',
            borderRadius: borderRadius,
            overflow: 'hidden',
            backgroundColor: 'white',
            opacity: 0.4,
            transform: [
              // { translateX: translateX },
              { translateX: translateX },
              { scale: backgroundScreen },
            ],
            zIndex: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <HomeScreen />
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            borderRadius: borderRadius,
            overflow: 'hidden',
          }}>

          <Stack.Navigator
          // screenOptions={{
          //   headerLeft: () => (
          //     <Button onPress={() => navigation.openDrawer()} transparent style={{position:'absolute',top: 5,left: 15,}}><Text style={{color: 'black'}}>open</Text></Button>
          //     // <TouchableOpacity onPress={() => navigation.openDrawer()}>
          //     //   <Text>Toggle</Text>
          //     // </TouchableOpacity>
          //   ),
          // header: () => null,
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerLeft: () =>
                  <Button onPress={() => navigation.openDrawer()} transparent>
                    <Icon type='MaterialIcons' name="menu" style={{ color: 'black', fontSize: 24 }} /></Button>
              }}
            // options={({ login }) => ({ login: route.params.login })}
            // options={
            //   {
            //      header: (props) => {
            //        // console.log(props);
            //        return null;
            //     },
            //   }
            // }
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="JobPost" component={JobPost} />
            <Stack.Screen name="About" component={AboutScreen}
              options={{ header: () => null, }} />
            <Stack.Screen name="Profile" component={ProfileScreen}
              options={{
                headerLeft: () => <Button onPress={() => navigation.openDrawer()} transparent>
                  <Icon type='MaterialIcons' name="menu" style={{ color: 'black', fontSize: 24 }} /></Button>
              }} />
          </Stack.Navigator>
        </Animated.View>
      </Animated.View>
    </>
  );
};

export default AppStackNavigator;
