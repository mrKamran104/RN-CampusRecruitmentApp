// import ActionTypes from '../constant/constant';
import { Alert } from 'react-native';
import firebase from './firebase';

export function Logout(data) {
  return (dispatch) =>
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful.
        dispatch({ type: 'Logout', payload: data });
      })
      .catch((error) => {
        // An error happened.
      });
}

export function SignupUser(user) {
  // console.log('before SignupUser', user);
  let create_user = null;
  user.role === 'student' ?
    create_user = {
      name: user.userName,
      email: user.email,
      address: user.address,
      gender: user.gender,
      phoneNo: user.phoneNo,
      role: user.role,
      matricMarks: user.matricMarks? user.matricMarks : '',
      intermediateMarks: user.intermediateMarks? user.intermediateMarks : '' ,
      bachlerMarks: user.bachlerMarks? user.bachlerMarks : '',
      masterMarks: user.masterMarks? user.masterMarks : '',
      descriptionMarks: user.descriptionMarks? user.descriptionMarks : '',
    }
    :
    create_user = {
      name: user.userName,
      hrNames: user.hrNames,
      directorNames: user.directorNames,
      email: user.email,
      address: user.address,
      phoneNo: user.phoneNo,
      role: user.role
    }

  return (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(async (result) => {
        // handle the data ..
        // console.log(result.user.uid)
        create_user['uid'] = result.user.uid;
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function () {
            resolve(xhr.response);
          };
          xhr.onerror = function () {
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", user.photo, true);
          xhr.send(null);
        });

        const ref = firebase.storage().ref().child(`${result.user.uid}.${user.photo.substring(user.photo.lastIndexOf('.') + 1)}`)
        let d = await ref.put(blob, { contentType: 'image/*' })
        let url = await d.ref.getDownloadURL();
        create_user['photo'] = url;
        // console.log("uploadImage", url)

        return firebase.database().ref('/').child(`users/${result.user.uid}`).set(create_user)
          .then(() => {
            // console.log('SignupUser database', create_user);
            createTwoButtonAlert('Hurry',
              'You are successfully signup,\n Click "Ok" to go Login screen', user.func);
            dispatch({ type: 'SignupUser', payload: create_user });
          });
      }).catch(function (error) {
        // console.log("SignupUser Error: ",error);
        dispatch({ type: 'Disable', payload: false });
        createTwoButtonAlert('Error!!!', `${error}`, () =>
          console.log('OK Pressed'),
        );
      });

  };
}



export function Disable(para) {
  return (dispatch) => {
    dispatch({ type: 'Disable', payload: para });
  };
}
export function iDisable(para) {
  return (dispatch) => {
    dispatch({ type: 'iDisable', payload: para });
  };
}

export function SigninUser(user) {
  return (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(function (result) {
        console.log(result);
        return firebase
          .database()
          .ref('/')
          .child(`users/${result.user.uid}`)
          .once('value')
          .then((data) => {
            console.log(data.val().address);
            dispatch({
              type: 'SigninUser',
              payload: { data: data.val(), login: user.login },
            });
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        // console.log(error);
        dispatch({ type: 'Disable', payload: false });
        createTwoButtonAlert('Error!!!', `${error}`, () =>
          console.log('OK Pressed'),
        );
      });
  };
}

export function updateProfile(user) {
  console.log("userss",user)
  let update_user = null;
  user.role === 'student' ?
    update_user = {
      uid: user.uid,
      name: user.userName,
      email: user.email,
      address: user.address,
      gender: user.gender,
      phoneNo: user.phoneNo,
      role: user.role,
      matricMarks: user.matricMarks,
      intermediateMarks: user.intermediateMarks,
      bachlerMarks: user.bachlerMarks,
      masterMarks: user.masterMarks,
      descriptionMarks: user.descriptionMarks,
    }
    :
    update_user = {
      uid: user.uid,
      name: user.userName,
      hrNames: user.hrNames,
      directorNames: user.directorNames,
      email: user.email,
      address: user.address,
      phoneNo: user.phoneNo,
      role: user.role
    }

  return async (dispatch) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", user.photo, true);
      xhr.send(null);
    });

    const ref = firebase.storage().ref().child(`${user.uid}.${user.photo.substring(user.photo.lastIndexOf('.') + 1)}`)
    let d = await ref.put(blob, { contentType: 'image/*' })
    let url = await d.ref.getDownloadURL();
    update_user['photo'] = url

    return firebase.database().ref('/')
      .child(`users/${user.uid}`)
      .update(update_user)
      .then(() => {
        console.log('database', update_user);
        dispatch({ type: 'updateProfile', payload: update_user });
      });
  }
}

export function jobPost(post) {
  const id = Math.floor((Math.random() * 999999999999999) + 1)
  let addpost = {
    ...post, id: id
  }
  return (dispatch) => firebase.database().ref('/').child(`JobPost/${post.uid}/${id}`).set({
    ...addpost
  }).then((data) => {
    console.log("llsj", data)
    dispatch({ type: 'jobPost', payload: data });
  }).catch((err) => {
    console.log(err)
  })
}

// export function GmailLogin() {

// }

export const GetPosts = (uid) => {
  // let posts = [];
  console.log(uid)
  return (dispatch) => {
    firebase.database().ref('/').child(`/JobPost/${uid}`).on('value', (data) => {
      console.log("data", data.val())
      dispatch({ type: 'GetPosts', payload: data.val() });
    })
  };
};

export const GetAllPosts = () => {
  return (dispatch) => {
    firebase.database().ref('/').child(`/JobPost/`).on('value', (data) => {
      console.log("data", data.val())
      dispatch({ type: 'GetAllPosts', payload: data.val() });
    })
  };
};

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
