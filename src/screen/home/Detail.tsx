//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import {FONTS, imageUrl, sizes} from '../../constants';
import {Movie} from '../../models';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {RFValue} from 'react-native-responsive-fontsize';

const Detail = props => {
  console.log(props);
  const item: Movie = props.route.params;
  console.log(item);
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
      <View style={styles.imgBox}>
        <Image
          style={styles.img}
          source={{uri: `${imageUrl}${item.poster_path}`}}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.original_title}</Text>
        <Text style={styles.titleDetail}>{2022 + '- 2 Seasons'}</Text>
        <Pressable style={styles.btnPlay}>
          <Icon color={'black'} size={RFValue(19)} name={'play'} />
          <Text style={styles.btnTitle}>Play</Text>
        </Pressable>
        <Pressable style={styles.btnDownload}>
          <Icon2 color={'black'} size={RFValue(19)} name={'download'} />
          <Text style={styles.btnDownloadTitle}>Download</Text>
        </Pressable>
        <Text style={styles.txtContent}>
        {item.overview}
        </Text>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBox: {
    height: sizes.height / 2,
    width: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
  },
  title: {
    ...FONTS.f4b,
    color: 'white',
    margin: 15,
  },
  titleDetail: {
    ...FONTS.f3,
    color: 'white',
    marginLeft: 15,
  },
  btnPlay: {
    width: '95%',
    height: 42,
    backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 5,
  },
  btnDownload: {
    width: '95%',
    height: 42,
    backgroundColor: '#353230',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 5,
  },
  btnTitle: {
    ...FONTS.f3b,
    marginLeft: 10,
  },
  btnDownloadTitle: {
    ...FONTS.f3,
    marginLeft: 10,
    color: 'white',
  },
  txtContent:{
    ...FONTS.f1,
    color:'white',
    marginLeft:10,
    marginTop:5
  }
});

//make this component available to the app
export default Detail;
