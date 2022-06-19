//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {baseUrl, FONTS} from '../constants';
import MovieItem from './MovieItem';
import http from '../components/http';
import {Movie} from '../models';
interface Props {
  title: string;
  url: string;
}
const MovieListItem = (props: Props) => {
  const {title, url} = props;

  const [movieData, setMovieData] = useState<Movie[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await http.get(`${baseUrl}movie/${url}`);
      if (response.data) {
        setMovieData(response.data.results);
      }
    };
    getData();
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.movieListBox}>
        <FlatList
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          data={movieData}
          renderItem={({item}) => {
            return <MovieItem overview={item.overview} original_title={item.original_title} poster_path={item.poster_path} />;
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...FONTS.f3,
    color: 'white',
    marginBottom: 5,
  },
  movieListBox: {
    flexDirection: 'row',
  },
});

//make this component available to the app
export default MovieListItem;
