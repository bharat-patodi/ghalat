// Import statements
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import allStyles from '../styles/styles';
import correctAnswer from '../logic/CorrectAnswer';

// Create and export component

export default class Question extends React.Component {
    render () {
        return (
            <View style = {allStyles.Option}>
                <TouchableOpacity onPress = {correctAnswer()}><Text>Cheetah</Text></TouchableOpacity>
            </View>
        )
    }
}
