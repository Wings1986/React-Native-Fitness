import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// import { Font } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import DayScreen from './src/screens/DayScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';
import DayCompleteScreen from './src/screens/DayCompleteScreen'

import * as myLanguage from  './src/translations';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator({
  DayScreen: {
    screen: DayScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerShown: false,
    }),
  },

  ExerciseScreen: {
    screen: ExerciseScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerShown: false,
    }),
  },

  DayCompleteScreen: {
    screen: DayCompleteScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerShown: false,
    }),
  },

  // DescriptionScreen: {
  //   screen: DescriptionScreen,
  //   navigationOptions: () => ({
  //     headerBackTitle: null,
  //     headerShown: false,
  //   }),
  // },
});

const HomeNavigation = createAppContainer(AppNavigator);

myLanguage.setI18nConfig();

export default class App extends React.Component {
    state = {
        fontLoaded: false
    };
    // myLanguage.setI18nConfig();
    // async componentDidMount() {

    //   await Font.loadAsync({
    //     // Load a font `Montserrat` from a static resource
    //     Roboto_medium: require('./assets/fonts/Roboto_medium.ttf'),
      
    //     // Any string can be used as the fontFamily name. Here we use an object to provide more control
    //     // 'Roboto_medium': {
    //     //   uri: require('./assets/fonts/Mont.ttf'),
    //     //   fontDisplay: FontDisplay.FALLBACK,
    //     // },
    //   });
    // }

  
    componentDidMount() {
      // StatusBar.setHidden(true);
      if (Platform.OS === 'android'){
        StatusBar.setTranslucent(true);
      }
      
      

      // Font.loadAsync({
      //   'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
      // });
    }

    render() {
      // if (!this.state.fontLoaded) {
      //   return (
      //     <View></View>
      //   );
      // }
      // else {
        
      // }
      return (

        <HomeNavigation />

      );
    }
}
