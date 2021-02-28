import {
  DrawerContentScrollView
} from '@react-navigation/drawer';
import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import CustomDrawerItem from '../../components/CustomDrawerItem';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import { Logout } from '../../store/action';

const CustomDrawerContent = (props) => {
  const { progress, navigation } = props;

  const { setProgress } = useContext(DrawerAnimationContext);

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);

  const opacity = Animated.interpolate(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: 'transparent',
        paddingBottom: 25,
        overflow: 'visible',
      }}>
      <View style={{ flexGrow: 1 }} />
      {/* // settings-sharp Ionicons
 // settings MaterialIcons // plus FontAwesome // heart FontAwesome 
			// mail Entypo // envelope FontAwesome // envelope FontAwesome5 //
      hand-holding-heart FontAwesome5 // pets MaterialIcons // person Ionicons
      // paw Foundation // hand-heart MaterialCommunityIcons */}
      {/* <DrawerItemList /> */}

      <Animated.View style={{ opacity: opacity }}>
        <CustomDrawerItem
          title="Home"
          icon={{ name: 'home', type: 'MaterialIcons' }}
          onPress={() => navigation.navigate('Home')}
        />
        <CustomDrawerItem
          title="Messages"
          icon={{ name: 'envelope', type: 'FontAwesome' }}
        />
        <CustomDrawerItem
          title="Profile"
          icon={{ name: 'person', type: 'Ionicons' }}
          onPress={() => navigation.navigate('Profile')}
        />
        <CustomDrawerItem
          title="About"
          icon={{ name: 'info-circle', type: 'FontAwesome' }}
          onPress={() => navigation.navigate('About')}
        />
        {/* <CustomDrawerItem
          title="Home"
          icon={{ name: 'settings-sharp', type: 'Ionicons' }}
        /> */}


      </Animated.View>

      {/* <DrawerItem
        label="Messages"
        labelStyle={styles.drawerLabel}
        style={styles.drawerItem}
        style={{
          marginVertical: 0,
          // backgroundColor: 'red',
          overflow: 'visible',
        }}
        labelStyle={{ fontWeight: '600' }}
        onPress={() => navigation.navigate('Details')}
        icon={() => (
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: 'grey',
              borderRadius: 16,
            }}
          />
        )}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <Text
            ellipsizeMode="clip"
            style={{ color, fontSize: 20, fontWeight: '600' }}>
            Homeeee
            {focused ? 'Focused text' : 'Unfocused text'}
          </Text>
        )}
        labelStyle={{ color: 'white', marginLeft: -16 }}
        style={{
          // alignItems: 'flex-start',
          marginVertical: 0,

          // backgroundColor: 'red',
        }}
        onPress={() => navigation.navigate('Home')}
        icon={() => (
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: 'grey',
              borderRadius: 16,
            }}
          />
        )}
      /> */}

      <View style={{ flexGrow: 1 }} />
      <SafeAreaView
        style={{ position: 'absolute', zIndex: 2, bottom: 0, left: 0 }}>
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: 'row',
            alignItems: 'center',
            transform: [{ translateX: translateX }],
          }}>
          <CustomDrawerItem
            title={`Log Out`}
            icon={{ name: 'exit', type: 'Ionicons' }}
            onPress={() => props.Logout(false)}
          />


          {/* <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              backgroundColor: 'grey',
              margin: 12,
            }}
          /> */}
          {/* <Text style={{ color: 'blue' }}>
            Settings | Log Out ................. ........
          </Text>
					<CustomDrawerItem
          title="Home"
          icon={{ name: 'settings-sharp', type: 'Ionicons' }}
        /> */}
        </Animated.View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};


function mapStateToProp(state) {
  return ({
    login: state.root.login
  })
}
function mapDispatchToProp(dispatch) {
  return ({
    Logout: (data) => { dispatch(Logout(data)) }
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(CustomDrawerContent);
// export default CustomDrawerContent;
