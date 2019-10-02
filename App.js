/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack' // first install the stack
import Header from './src/components/Header';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
        <Header />
          <View>
            <Text>This is the start.</Text>
            <Text>Screen 01: Splash screen</Text>
            <Text>Screen 02: Menu screen</Text>
            <Text>Screen 03: Game screen</Text>
            <Text>Screen 03-01: Question Screen</Text>
            <Text>Screen 03-02: Final Results screen</Text>
            <Text>Screen 04: My steps screen</Text>
            <Text>This is the end.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
