import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet, Button, Platform, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarCodeScan from './BarCodeScan.js';
import Data from './data.js';
const { width } = Dimensions.get('window');
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Start from './Home.js';

const Tab = createBottomTabNavigator();


function Scan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BarCodeScan />
    </View>
  );
}

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    
      <Start/>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Data />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#2f4f4f',
        inactiveTintColor: '#c0c0c0',
      }}
    >

      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lighthouse" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Sensors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="screw-machine-flat-top" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {


  return (

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>




  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/



const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
  }
});
