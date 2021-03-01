import React from 'react';
import { Text, View, ScrollView } from 'react-native';

function PostDetails(props) {
    const { route } = props;

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
        </ScrollView>
    );
}

export default PostDetails
