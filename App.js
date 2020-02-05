import React, {Component} from 'react';
import {Platform, StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import DayScreen from './src/screens/DayScreen';
import ExerciseScreen from './src/screens/ExerciseScreen';
import DayCompleteScreen from './src/screens/DayCompleteScreen'

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
export default class App extends React.Component {
    state = {
        fontLoaded: false
    };

    async componentDidMount() {
        // await Font.loadAsync({
        //     // 'SCRATCHMYBACK': require('./assets/fonts/SCRATCHMYBACK.TTF'),
        //     'PacificoRegular': require('./assets/fonts/Pacifico-Regular.ttf'),
        //     'PattayaRegular': require('./assets/fonts/Pattaya-Regular.ttf'),
        // });
        // this.setState({fontLoaded: true});
    }

    render() {
        // if (this.state.fontLoaded) {
            return (
              <HomeNavigation />
            );
        // }
    }
}
