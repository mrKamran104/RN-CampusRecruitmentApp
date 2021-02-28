import ImagePicker from 'react-native-image-crop-picker';

export const openGallery = async (resourcePath) => {
  let d;
  await ImagePicker.openPicker({
    width: 400,
    height: 400,
    cropping: true,
    mediaType: 'image',
    freeStyleCropEnabled: true,
    cropperToolbarTitle: 'Crop Photo',
    hideBottomControls: true,
  })
    .then((image) => {
      console.log(image);
      d = image.path;
    })
    .catch((e) => {
      d = resourcePath;
    });

  return d;
};
export const openCamera = async (resourcePath) => {
  let d;
  await ImagePicker.openCamera({
    width: 400,
    height: 400,
    cropping: true,
    mediaType: 'image',
    freeStyleCropEnabled: true,
    cropperToolbarTitle: 'Crop Photo',
    hideBottomControls: true,
  })
    .then((image) => {
      console.log(image);
      d = image.path;
    })
    .catch((e) => {
      d = resourcePath;
    });
  return d;
};

// export const openCrop = async (img) => {
//   let d;
//   await ImagePicker.openCropper({
//     path: img,
//     width: 200,
//     height: 200,
//     cropperToolbarTitle: 'Edit Photo',
//     // freeStyleCropEnabled: true,
//     hideBottomControls: true,
//   }).then((image) => {
//     console.log(image);
//     d = image.path;
//   });
//   return d;
// };
