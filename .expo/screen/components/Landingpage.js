import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import HomeNavigator from './HomeNavigator';
import Creategroup from "./CreateGroup"
import Chatpage from "./ChatBot"
import Headercontant from "./Headercontant";
import Live from "./Live";
import Scorecard from './Scorecard';
import Commentary from './Commentary';
import Predicitions from './Predicitions';
import Buttoncontant from './Buttoncontant';

const Tab = createMaterialTopTabNavigator();

const Landingpage = () => {
  return (
    <>
      <Headercontant />
      <Tab.Navigator 
      tabBarOptions={{
        // activeTintColor: 'black',
        // inactiveTintColor: 'gray',
        // labelStyle: { fontSize: 14, fontWeight:"700"},
        // style: { elevation: 0, shadowOpacity: 0},
        // //indicatorStyle: { backgroundColor: 'blue', width:100},
        // scrollEnabled:true,
        // tabStyle: {
        //   width: 140,
        //   height:50,
        //   borderWidth:1,
        //   borderRadius:20,          
        // },
      }}
      tabBar={props => <Buttoncontant {...props} />}
       >
        <Tab.Screen name={'Mychat'} component={Creategroup} />
        <Tab.Screen name={'GameChat'} component={Chatpage} />
        <Tab.Screen name={'Live'} component={Live} />
        <Tab.Screen name={'Scorecard'} component={Scorecard} />
        <Tab.Screen name={'Commentary'} component={Commentary} />
        <Tab.Screen name={'Predicitions'} component={Predicitions} />
      </Tab.Navigator>
    </>
  );
}

export default Landingpage;