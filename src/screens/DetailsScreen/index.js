import React, { useState } from 'react';
import { Image, Text, View, Button, Alert, ScrollView } from 'react-native';
import firebase from './../../store/action/firebase';

function DetailsScreen(props) {
  const { route } = props;
  const [showComapny, setShowComapny] = useState(false)
  const [companyData, setCompanyData] = useState(undefined)
  const [sendCV, setSendCV] = useState('Send CV')
  const [showCompanyDetails, setShowCompanyDetails] = useState('Show Company Details')

  const sendCv = () => {
    setSendCV('Sent')
  }

  const fetchCompanyDetails = async () => {
    if (companyData !== undefined) {
      setShowComapny(!showComapny)
      showComapny ? setShowCompanyDetails('Show Company Details') : setShowCompanyDetails('Hide Company Details')
    } else {
      try {
        const data = await firebase.database().ref('/')
          .child(`users/${route.params.params.select.uid}`)
          .once('value');
        setCompanyData(data.val());
        setShowComapny(!showComapny);
        setShowCompanyDetails('Hide Company Details')
      } catch (error) {
        // Handle Errors here.
        // console.log(error);
        createTwoButtonAlert('Error!!!', `${error}`, () => console.log('OK Pressed')
        );
      }
    }
  }

  const createTwoButtonAlert = (title, msg, func) => {
    Alert.alert(
      title,
      msg,
      [
        ,
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },
        { text: 'OK', onPress: func },
      ],
      { cancelable: false },
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        marginHorizontal: 25,
        marginBottom: 20
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 32,
          textAlign: 'center',
          marginTop: 30,
        }}>
        Job Details
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Job Title:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Qualification:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Skills:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Experience:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Responsibility:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Salary:</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Toatal Position:</Text>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.jobTitle}</Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.qualification}</Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.skills}</Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.experience}</Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.responsibility}</Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.salary}</Text>
          <Text style={{ fontSize: 20, marginTop: 20 }}>{route.params.params.select.totalPosition}</Text>
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ marginBottom: 20 }}>
          <Button onPress={sendCv} title={sendCV} />
        </View>
        <Button onPress={fetchCompanyDetails} title={showCompanyDetails} />
        {showComapny && <>
          <View style={{ marginTop: 20 }}>
            <Image source={{ uri: companyData.photo }}
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
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Company Name:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Director Name:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>HR Name:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Email:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Address:</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Phone No:</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 20, marginTop: 20 }}>{companyData.name}</Text>
              <Text style={{ fontSize: 20, marginTop: 20 }}>{companyData.directorNames}</Text>
              <Text style={{ fontSize: 20, marginTop: 20 }}>{companyData.hrNames}</Text>
              <Text style={{ fontSize: 20, marginTop: 20 }}>{companyData.email}</Text>
              <Text style={{ fontSize: 20, marginTop: 20 }}>{companyData.address}</Text>
              <Text style={{ fontSize: 20, marginTop: 20 }}>{companyData.phoneNo}</Text>
            </View>
          </View></>
        }
      </View>
    </ScrollView>
  );
}

export default DetailsScreen
