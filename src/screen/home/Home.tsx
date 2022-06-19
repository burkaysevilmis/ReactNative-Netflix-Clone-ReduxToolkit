//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MovieListItem from '../../components/MovieListItem';
import {baseUrl, sizes} from '../../constants';
import {Movie} from '../../models';
import http from '../../components/http';
const Home = () => {
  const navigation = useNavigation();
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    async function fetchData() {
      const request = await http.get(`${baseUrl}movie/now_playing`);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );

      return request;
    }
    fetchData();
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../img/logo-one.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Pressable
          onPress={() =>
            navigation.navigate<never>('detail', {
              poster_path: movie?.poster_path,
              original_title: movie?.original_title,
              overview: movie?.overview,
            })
          }
          style={styles.firstMovie}>
          <Image
            style={styles.firstImage}
            source={{
              uri: 'https://image.tmdb.org/t/p/original' + movie?.backdrop_path,
            }}
          />
        </Pressable>
        <View style={styles.movieList}>
          <MovieListItem url="popular" title="Popular on Netflix" />
          <MovieListItem url="top_rated" title="Top Rated" />
          <MovieListItem url="upcoming" title="Upcoming" />
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 42,
    width: sizes.width * 0.2,
  },
  img: {
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 1,
  },
  firstMovie: {
    height: sizes.height / 2,
    width: sizes.width,
  },
  firstImage: {width: '100%', height: '100%', resizeMode: 'contain'},
  movieList: {
    flex: 1,
    marginHorizontal: 20,
  },
});

//make this component available to the app
export default Home;
