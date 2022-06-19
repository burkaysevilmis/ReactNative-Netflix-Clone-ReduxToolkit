//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {} from 'react-native-safe-area-context';
import {FONTS} from './src/constants';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Root from './src/screen/Root';
import Loading from './src/components/Loading';
import { useAppSelector } from './src/store/hook';

const MyComponent = () => {
  const {globalLoading}=useAppSelector(state=>state.auth);
  return (
    <SafeAreaView style={styles.container}>
      {globalLoading&&<Loading />}
      <Root />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyComponent;
