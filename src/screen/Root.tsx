import React from 'react';
import {View, Text} from 'react-native';
import {Downloads, Fast, Home, Login, New, Search} from './index';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Detail from './home/Detail';
import { FONTS } from '../constants';
import { useAppSelector } from '../store/hook';
const AuthStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthCreate = () => {
  return (
    <AuthStack.Navigator initialRouteName="login">
      <AuthStack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};
const HomeCreate = () => {
  return (
    <Stack.Navigator defaultScreenOptions={{headerShown: false}}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const BottomCreate = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      defaultScreenOptions={{}}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarActiveTintColor:'white',tabBarInactiveTintColor:'gray',
        tabBarLabelStyle:{fontFamily:'Poppins-Medium'}
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) =>
            <AntDesign name="home" size={24} color={color} />,
        }}
        name="Home"
        component={HomeCreate}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) =>
            <MaterialIcons name="video-library" size={24} color={color} />,
        }}
        name="New"
        component={New}
      />
      {/* <Tab.Screen  name="Fast" component={Fast} /> */}
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) =>
            <Ionicons name="search" size={24} color={color} />,
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) =>
            <AntDesign name="download" size={24} color={color} />,
        }}
        name="Downloads"
        component={Downloads}
      />
    </Tab.Navigator>
  );
};
const Root = () => {
  const {isLogin}=  useAppSelector(state=>state.auth);

  return (
    <Stack.Navigator>
      {!isLogin ? (
        <Stack.Screen
          name="authPage"
          component={AuthCreate}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="bottomPage"
          component={BottomCreate}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
};

export default Root;
