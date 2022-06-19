import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window');

export const color = {
  primary: '#8f221c',
  accent: '#00B373',
  white: 'white',
  gray: 'gray',
  black: 'black',
  green: 'green',
  red: 'red',
  blue: 'blue',
  linear: ['#004E42', '#00B373'],
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
};
export const sizes = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  fs0: RFValue(10),
  fs1: RFValue(11),
  fs2: RFValue(12),
  fs3: RFValue(13),
  fs4: RFValue(14),
  fs5: RFValue(15),
  fs6: RFValue(16),
  fs7: RFValue(17),
  fs8: RFValue(18),
  fs9: RFValue(19),
  fs10: RFValue(20),
  fs11: RFValue(21),
  // app dimensions
  width,
  height,
  isSmall: width < 330 ? true : false,
  m5: 5,
  p5: 5,
  m10: 10,
  p10: 10,
  m15: 15,
  p15: 15,
  m20: 20,
  p20: 20,
};
export const FONTS = {
  f0: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs0, color: '#231F20'},
  f1: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs1, color: '#231F20'},
  f2: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs2, color: '#231F20'},
  f3: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs3, color: '#231F20'},
  f4: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs4, color: '#231F20'},
  f5: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs5, color: '#231F20'},
  f6: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs6, color: '#231F20'},
  f7: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs7, color: '#231F20'},
  f8: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs8, color: '#231F20'},
  f9: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs9, color: '#231F20'},
  f10: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs10, color: '#231F20'},
  f11: {fontFamily: 'Poppins-Medium', fontSize: sizes.fs11, color: '#231F20'},

  f0b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs0, color: '#231F20'},
  f1b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs1, color: '#231F20'},
  f2b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs2, color: '#231F20'},
  f3b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs3, color: '#231F20'},
  f4b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs4, color: '#231F20'},
  f5b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs5, color: '#231F20'},
  f6b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs6, color: '#231F20'},
  f7b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs7, color: '#231F20'},
  f8b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs8, color: '#231F20'},
  f9b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs9, color: '#231F20'},
  f10b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs10, color: '#231F20'},
  f11b: {fontFamily: 'Poppins-Bold', fontSize: sizes.fs11, color: '#231F20'},
};
const anaUrl = 'https://api.themoviedb.org/3/';
export const imageUrl = 'https://image.tmdb.org/t/p/original'
export const baseUrl = anaUrl;
