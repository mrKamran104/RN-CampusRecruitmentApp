const INITIAL_STATE = {
  user: { },
  // email: '',
  // userName: '',
  // address: '',
  // uid: '',
  login: false,
  disable: false,
  // photo: '',
  // gender: true,
  // bloodGroup: '',
  // donor: false,
  posts: [],
  allposts: [],
  // getDonors: [],
  // phoneNo: ''
};

export default globalData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Disable':
      return {
        disable: action.payload,
      };
    case 'GetPosts':
      // console.log("GetDonor", action.payload)
      // break
      return {
        ...state,
        posts: action.payload,
      };
    case 'GetAllPosts':
      // console.log("GetDonor", action.payload)
      // break
      return {
        ...state,
        allposts: action.payload,
      };
      // disable: false,
    case 'SignupUser':
      // console.log('signup', action);
      // break
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        // email: action.payload.email,
        // userName: action.payload.userName,
        // address: action.payload.address,
        // gender: action.payload.gender,
        // bloodGroup: action.payload.bloodGroup,
        // donor: action.payload.donor,
        disable: false,
        // photo: action.payload.photo,
        // phoneNo: action.payload.phoneNo
      };
    case 'SigninUser':
      // console.log('signin', action);
      // break
      return {
        ...state,
        user: { ...state.user, ...action.payload.data },
        // email: action.payload.data.email,
        // userName: action.payload.data.name,
        // address: action.payload.data.address,
        login: action.payload.login,
        // gender: action.payload.data.gender,
        // uid: action.payload.data.uid,
        // bloodGroup: action.payload.data.bloodGroup,
        // donor: action.payload.data.donor,
        // photo: action.payload.data.photo,
        // phoneNo: action.payload.data.phoneNo
      };
    case 'updateProfile':
      // console.log('update', action);
      // break
      return {
        ...state,
        user: { ...state.user, ...action.payload }
        // email: action.payload.email,
        // userName: action.payload.name,
        // address: action.payload.address,
        // gender: action.payload.gender,
        // uid: action.payload.uid,
        // bloodGroup: action.payload.bloodGroup,
        // donor: action.payload.donor,
        // phoneNo: action.payload.phoneNo
      };
    case 'Logout':
      // console.log("Logout",action)
      // break;
      return {
        ...state,
        login: action.payload.login,
        disable: false,
      };
    case 'jobPost':
      // console.log("Logout",action)
      // break;
      return {
        ...state
      };
    default:
      return state;
  }
};
