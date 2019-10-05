/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from './src/components/Header';
import allStyles from './src/styles/styles';

// Home Screen

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={[allStyles.HomeScreen]}>
        <StatusBar barStyle="dark-content"/>
        <View>
          <Text>This is the Home screen</Text>
          <Button style={allStyles.Button} title="Go to Game" onPress={
            () => this.props.navigation.navigate('Game')
          } />
          <Text>This button leads to questions.</Text>
          <Button title= "Go to Question" onPress = {
            () => this.props.navigation.navigate('Question')
          } />
          <Text>This button leads to Results.</Text>
          <Button title= "Go to Results" onPress = {
            () => this.props.navigation.navigate('Results')
          } />
        </View>
      </ScrollView>
    );
  }
}

// Game Screen

class GameScreen extends React.Component {
  render () {
    return (
      <View style = {[allStyles.MainContainer, allStyles.GameScreen]}>
        <Text>This is where we show the Game.</Text>
      </View>
    )
  }
}

// Question Screen

class QuestionScreen extends React.Component {
  render () {
    return (
      <View style = {[allStyles.QuestionScreen, allStyles.MainContainer]}>
        <Text>This is where we show the Questions.</Text>
      </View>
    )
  }
}

// Results Screen

class ResultsScreen extends React.Component {
  render() {
    return(
      <View style = {[allStyles.MainContainer, allStyles.ResultsScreen]}>
        <Text>Results are in.</Text>
      </View>
    )
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
  }
},
{
  initialRouteName: 'Home',
}

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