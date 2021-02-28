import React from 'react';
import { Image, Text, View } from 'react-native';

export default function DetailsScreen(props) {
  const { route } = props;

  return (
    <View
      style={{
        flex: 1,
        // width: WIDTH - 20,
        marginHorizontal: 25
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#debd8a',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 32,
          textAlign: 'center',
          marginTop: 30,
        }}>
        Donor Details
      </Text>
      <View style={{ marginTop: 25 }}>
        <Image source={{ uri: route.params.params.select.photo }}
          style={{
            height: 150,
            width: 150,
            resizeMode: 'cover',
            alignSelf: 'center',
            borderRadius: 150
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Name:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Gender:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Email:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Blood Group:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Address:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 30 }}>Phone #:</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 20, marginTop: 30 }}>{route.params.params.select.name}</Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>{route.params.params.select.gender ? 'Male' : 'Female'}</Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>{route.params.params.select.email}</Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>{route.params.params.select.bloodGroup}</Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>{route.params.params.select.address}</Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>{route.params.params.select.phoneNo}</Text>
        </View>
      </View>
    </View>
  );
}
