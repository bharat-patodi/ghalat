/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Header from './src/components/Header';

// Home Screen

class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <StatusBar barStyle = "dark-content"/>
        <Header />
        <View>
          <Text>This is the start.</Text>
          <Text>Screen 01: Splash screen</Text>
          <Text>Screen 02: Home screen</Text>
          <Button title= "Go to Home" onPress = {
            () => this.props.navigation.navigate('Home')
          } />
          <Text>Screen 03: Game screen</Text>
          <Button title= "Go to Game" onPress = {
            () => this.props.navigation.navigate('Game')
          } />
          <Text>Screen 03-01: Question Screen</Text>
          <Button title= "Go to Question" onPress = {
            () => this.props.navigation.navigate('Question')
          } />
          <Text>Screen 03-02: Final Results screen</Text>
          <Button title= "Go to Results" onPress = {
            () => this.props.navigation.navigate('Results')
          } />
          <Text>Screen 04: My steps screen</Text>
          <Text>This is the end.</Text>
          <Button title= "Go to the end" onPress = {
            () => this.props.navigation.navigate('End')
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
      <View>
        <Text>This is where we show the Game.</Text>
      </View>
    )
  }
}

// Question Screen

class QuestionScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>This is where we show the Questions.</Text>
      </View>
    )
  }
}

// Results Screen

class ResultsScreen extends React.Component {
  render() {
    return(
      <View>
        <Text>Results are in.</Text>
      </View>
    )
  }
}

// End Screen

class EndScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Sab Khatm.</Text>
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
  },
  End: {
    screen: EndScreen,
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
  );}
};


const styles = StyleSheet.create({

});
