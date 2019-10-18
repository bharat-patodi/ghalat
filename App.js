/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsScreen from './src/screens/ResultsScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import HomeScreen from './src/screens/HomeScreen';

// Navigation
const MyAppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Question: {
    screen: QuestionScreen,
  },
  Results: {
    screen: ResultsScreen,
  },
},
{
  initialRouteName: 'Home',
},
);

const MyAppContainer = createAppContainer(MyAppNavigator);

export default class App extends React.Component {
  render () {
    return (
      <>
        <MyAppContainer />
      </>
    );
  }
};

/*
  (a) the layout looks like this:
    >> Splash screen
    >> Home screen with start game button and directions (w/without tabs)
    >> Question Screen which shows a single question with multiple choices and leads to more questions
    >> In the end, the results screen with the score is shown.
  (b) Create a single question screen and a basic layout >> Add another question and change the layout accordingly.
  (c) Create a React app for this too.
*/