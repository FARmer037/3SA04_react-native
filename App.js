import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import WeatherScreen from './WeatherScreen';
import ZipCodeScreen from './ZipCodeScreen';

const RootStack = createStackNavigator({ 
  Weather: WeatherScreen, 
  ZipCode: ZipCodeScreen 
},{ 
  initialRouteName: 'Weather', 
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
