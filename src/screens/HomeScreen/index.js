import {
  Card,
  CardItem,
  Right,
  Icon, Fab
} from 'native-base';
import React, { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  Picker, ScrollView, StyleSheet, Text, View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { GetPosts, GetAllPosts } from '../../store/action';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

function HomeScreen(props) {

  const { navigation } = props;
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    props.user.role === 'company' && props.GetPosts(props.user.uid)
    props.user.role === 'student' && props.GetAllPosts()
  }, [])

  console.log("userrrrr", props.user)
  console.log("posts", props.posts)

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#c1cdd0',
      }}>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginTop: 25, marginBottom: 55 }}>
          <Text style={{ marginBottom: 25, fontWeight: 'bold', fontSize: 25, textAlign: 'center' }}>{props.user.role === 'company' ? `${props.user.name} Posts` : 'All Companies Post\'s'}</Text>
          {props.user.role === 'company' &&
            Object.keys(props.posts)?.map((v, i) => {
              return (
                <View style={{ alignItems: 'center' }} key={i}>
                  <Card style={{ width: WIDTH - 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Post Details', { params: { select: props.posts[v] } }) }}>
                      <CardItem>
                        <View>
                          <Text><Text style={{ fontWeight: "bold" }}>Company: </Text>{props.user.name}</Text>
                          <Text><Text style={{ fontWeight: "bold" }}>Total Position: </Text>{props.posts[v].totalPosition}</Text>
                          <Text><Text style={{ fontWeight: "bold" }}>Qualification: </Text>{props.posts[v].qualification}</Text>
                        </View>
                        <Right>
                          <View style={{ alignItems: 'flex-start' }}>
                            <Text><Text style={{ fontWeight: "bold" }}>Job Title: </Text>{props.posts[v].jobTitle}</Text>
                            <Text><Text style={{ fontWeight: "bold" }}>Experience: </Text>{props.posts[v].experience}</Text>
                            <Text><Text style={{ fontWeight: "bold" }}>Salary: </Text>{props.posts[v].salary}</Text>
                          </View>
                        </Right>
                      </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
              )
            })}
          {props.user.role === 'student' && Object.keys(props.allposts)?.map((v, i) => {
            let op = props.allposts[v];
            return Object.keys(props.allposts[v]).map((v, i) => {
              return (
                <View style={{ alignItems: 'center' }} key={i}>
                  <Card style={{ width: WIDTH - 20 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Details', { params: { select: op[v] } }) }}>
                      <CardItem>
                        <View>
                          <Text><Text style={{ fontWeight: "bold" }}>Company: </Text>{op[v].name}</Text>
                          <Text><Text style={{ fontWeight: "bold" }}>Job Title: </Text>{op[v].jobTitle}</Text>
                          <Text><Text style={{ fontWeight: "bold" }}>Qualification: </Text>{op[v].qualification}</Text>
                        </View>
                        <Right>
                          <View style={{ alignItems: 'flex-start' }}>
                            <Text><Text style={{ fontWeight: "bold" }}>Total Position: </Text>{op[v].totalPosition}</Text>
                            <Text><Text style={{ fontWeight: "bold" }}>Experience: </Text>{op[v].experience}</Text>
                            <Text><Text style={{ fontWeight: "bold" }}>Salary: </Text>{op[v].salary}</Text>
                          </View>
                        </Right>
                      </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
              )
            })
          })}
        </ScrollView>
        {props.user.role === 'company' && <Fab
          active={false}
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => navigation.navigate('JobPost', { uid: props.user.uid, name: props.user.name })}>
          <Icon name="add" />
        </Fab>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: WIDTH, backgroundColor: '#ffffff' },
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
    posts: { ...state.root.posts },
    allposts: { ...state.root.allposts },
    user: { ...state.root.user },
  };
}
function mapDispatchToProp(dispatch) {
  return {
    GetPosts: (data) => {
      dispatch(GetPosts(data));
    },
    GetAllPosts: () => {
      dispatch(GetAllPosts());
    },
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(HomeScreen);
