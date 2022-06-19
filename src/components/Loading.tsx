//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import { color } from '../constants';

// create a component
const MyComponent = () => {
  return (
    <Modal transparent style={styles.container}>
      <View style={styles.loadingBox}>
      <ActivityIndicator size='large' color={color.red} />

      </View>
    </Modal>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBox:{flex:1,justifyContent:'center',alignItems:'center'}
});

//make this component available to the app
export default MyComponent;
