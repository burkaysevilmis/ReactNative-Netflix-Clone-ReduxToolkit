/* eslint-disable react-native/no-inline-styles */
//import liraries
import {Formik} from 'formik';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {color, FONTS, sizes} from '../../constants';
import * as Yup from 'yup';
import { login } from '../../store/authSlice';
import { useAppDispatch, useAppSelector } from '../../store/hook';
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
});
export interface LoginValues {
  password: string;
  email: string;
}
const Login = () => {
  const{loginLoading}= useAppSelector(state=>state.auth);
  const dispatch = useAppDispatch();
  const initialValues: LoginValues = {
    password: 'TestPass123!',
    email: 'testuser@gmail.com',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          width="100%"
          height="100%"
          source={require('../../img/logo.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
           dispatch(login(values));
        }}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
          isValid,
          setFieldValue,
        }) => (
          <View style={styles.formBox}>
            <TextInput
              onBlur={() => {
                setFieldTouched('email', false);
              }}
              onFocus={() => {
                setFieldTouched('email', true);
              }}
              onChangeText={handleChange('email')}
              placeholder="E-posta"
              placeholderTextColor="white"
              value={values.email}
              style={[
                styles.inputBox,
                {
                  borderWidth: 0.6,
                  borderColor: touched.email ? 'white' : '#484848',
                },
              ]}
            />
           
           <Text style={[styles.txtError,{opacity:errors.email&&touched.email?1:0}]}>{errors.email}</Text>

            <TextInput
            onBlur={() => {
                setFieldTouched('password', false);
              }}
              onFocus={() => {
                setFieldTouched('password', true);
              }}
              onChangeText={handleChange('password')}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry
              value={values.password}
              style={[
                styles.inputBox,
                {
                  borderWidth: 0.6,
                  borderColor: touched.password ? 'white' : '#484848',
                },
              ]}
            />
                          <Text style={[styles.txtError,{opacity:errors.password&&touched.password?1:0}]}>{errors.password}</Text>

            <Pressable onPress={()=>handleSubmit()} disabled={!isValid||loginLoading} style={styles.btn}>
              {loginLoading?<ActivityIndicator size='small' color='white' /> :              <Text style={styles.btnText}>Sign In</Text>
}
            </Pressable>
            <Text style={styles.txtBottom}>
              Sign inis protected by Google reCAPTCHA to ensure you're not a
              bot,Learn more.
            </Text>
          </View>
        )}
      </Formik>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 42,
  },
  formBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  inputBox: {
    height: 42,
    width: '100%',
    backgroundColor: '#484848',
    borderRadius: 8,
    ...FONTS.f1,
    color: 'white',
    paddingLeft: 10,
    margin: 10,
  },
  txtError: {
    ...FONTS.f1,
    color: color.primary,
    alignSelf: 'flex-start',
  },
  btn: {
    height: 42,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: color.primary,
    marginTop: 10,
  },
  btnText: {
    ...FONTS.f2,
    color: 'white',
  },
  img: {
    width: sizes.width,
    height: 42,
    marginTop:10
  },
  txtBottom: {
    ...FONTS.f1,
    color: color.gray,
    marginTop: 20,
    textAlign: 'center',
  },
});

//make this component available to the app
export default Login;
