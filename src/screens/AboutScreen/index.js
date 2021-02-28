import { Icon } from 'native-base';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import demo from '../../assets/demo.png';

export default function AboutScreen(props) {
  const ImageUri = Image.resolveAssetSource(demo).uri;
  const { navigation } = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Campus Recruitment App</Text>
      <Text style={{ color: 'gray' }}>Version 1.0</Text>
      <View style={{ marginTop: 30 }}>
        <Image source={{ uri: ImageUri }}
          style={{
            height: 150,
            width: 150,
            resizeMode: 'cover',
            alignSelf: 'center',
            // borderRadius: 150
          }}
        />
      </View>
      <Text style={{ padding: 25 }}>{'\u00A9'} 2020-2021 Campus Recruitment App Inc.</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{ marginTop: 100, marginBottom: 10, backgroundColor: '#14151f', shadowColor: 'black', elevation: 20, width: 60, height: 60, borderRadius: 60 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Icon type="Ionicons" name="arrow-back" style={{ color: 'white' }} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
