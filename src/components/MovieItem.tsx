//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {imageUrl, sizes} from '../constants';
import {Movie} from '../models';

const MovieItem = (props: Movie) => {
  const {poster_path,original_title,overview} = props;
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('detail', {poster_path,original_title,overview})}
      style={styles.container}>
      <Image
        style={styles.img}
        source={{uri: `${imageUrl}${poster_path}`}}
        resizeMode="contain"
      />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: sizes.height * 0.2,
    width: sizes.width * 0.35,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default MovieItem;
