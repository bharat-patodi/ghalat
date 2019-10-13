/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameScreen from './src/screens/GameScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import allStyles from './src/styles/styles';

// Home Screen

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={[allStyles.HomeScreen]}>
          <StatusBar barStyle="dark-content"/>
          <View>
            <Text style = {{fontSize: 20}}>Welcome to the mind-bending game of Ghalat where the wrong answer is the right one. It is refreshing for the mind to try activities like these and I encourage everyone to play it for a while.</Text>
            <Button
              style={allStyles.ButtonStyle}
              title="Go to Game"
              onPress={
              () => this.props.navigation.navigate('Game')
              }
            />
            <Text>This button leads to questions.</Text>
            <Button
              title= "Go to Question"
              onPress = {
              () => this.props.navigation.navigate('Question')
              }
            />
            <Text>This button leads to Results.</Text>
            <Button
              style = {allStyles.ButtonStyle}
              title= "Go to Results"
              onPress = {
              () => this.props.navigation.navigate('Results')
              }
            />
          </View>
      </View>
    );
  }
}

// Navigation
const MyAppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
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
*/