import {
    ActionSheet, Button,
    CheckBox, Form,
    Icon, Input, Item,
    Label
} from 'native-base';
import React, { useState } from 'react';
import {
    Alert, Dimensions,
    Image,
    Picker, ScrollView, StyleSheet, Text, View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { jobPost } from '../../store/action';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

function JobPost(props) {
    const [jobTitle, setJobTitle] = useState('');
    const [qualification, setQualifcation] = useState('')
    const [salary, setSalary] = useState('')
    const [experience, setExperience] = useState('');
    const [totalPosition, setTotalPosition] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [skills, setSkills] = useState('')

    const jobpostfunc = () => {
        if (jobTitle === '' || qualification === '' || salary === '' || experience === '' || totalPosition === '' || responsibility === '' || skills === '') {
            // setError('Fields are required');
            createTwoButtonAlert('Error!!!', 'All fields are required!!!', () => console.log('OK Pressed'));
            return;
        }
        // props.iDisable(true);
        props.jobPost({
            jobTitle: jobTitle,
            qualification: qualification,
            salary: salary,
            uid: props.route.params.uid,
            name: props.route.params.name,
            experience: experience,
            totalPosition: totalPosition,
            responsibility: responsibility,
            skills: skills,
            role: 'company',
        });
        setJobTitle('')
        setQualifcation('')
        setSalary('')
        setExperience('')
        setTotalPosition('')
        setResponsibility('')
        setSkills('')
    };

    const createTwoButtonAlert = (title, msg, func) =>
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

    return (
        <ScrollView
            style={{
                flex: 1,
                // justifyContent: 'center',
                // alignItems: 'center',
                // bottom: 20,
                backgroundColor: 'white',
            }}>
            <View style={styles.container}>
                <Text style={styles.text}>Job Post</Text>
                <Form>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Job Title</Label>
                        <Input value={jobTitle} onChangeText={(val) => setJobTitle(val)} />
                    </Item>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Qualification</Label>
                        <Input value={qualification} onChangeText={(val) => setQualifcation(val)} />
                    </Item>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Experience</Label>
                        <Input value={experience} onChangeText={(val) => setExperience(val)} />
                    </Item>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Skills</Label>
                        <Input
                            value={skills}
                            onChangeText={(val) => setSkills(val)}
                        />
                    </Item>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Responsibility</Label>
                        <Input
                            value={responsibility}
                            onChangeText={(val) => setResponsibility(val)}
                        />
                    </Item>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Salary Range</Label>
                        <Input
                            value={salary}
                            onChangeText={(val) => setSalary(val)}
                        />
                    </Item>
                    <Item floatingLabel style={{ marginEnd: 20 }}>
                        <Label>Total Positions</Label>
                        <Input
                            value={totalPosition}
                            onChangeText={(val) => setTotalPosition(val)}
                        />
                    </Item>
                </Form>
                <Button
                    style={{
                        marginTop: 40,
                        marginEnd: 30,
                        marginStart: 30,
                        backgroundColor: 'green',
                    }}
                    onPress={jobpostfunc}
                    iconLeft
                    block>
                    {/* <Icon name='home' /> */}
                    <Text style={{ color: 'white' }}>Submit Post</Text>
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        // bottom: 0,
        // backgroundColor: 'white',
        paddingTop: 25,
        paddingBottom: 30,
        // position: 'absolute',
        // flex: 0.3,
        // borderWidth: 5,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },
    container2: {
        width: WIDTH,
        paddingTop: 25,
        paddingBottom: 30,
    },
    backButton: {
        position: 'absolute',
        top: 5,
    },
    boder: {
        borderTopRightRadius: 80,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    image: {
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    row: {},
    text: {
        color: 'black',
        fontSize: 42,
        paddingTop: 15,
        paddingBottom: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#000000a0',
    },
    ImageBg: {
        flex: 1,
        // height: 50,
        flexDirection: 'column',
    },
    contentContainer: {
        backgroundColor: '#f6f6f6',
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    searchContainer: {
        padding: 32,
    },
});

function mapStateToProp(state) {
    return {
        user: { ...state.root.user },
    };
}
function mapDispatchToProp(dispatch) {
    return {
        jobPost: (data) => {
            dispatch(jobPost(data));
        },
    };
}

export default connect(mapStateToProp, mapDispatchToProp)(JobPost);
