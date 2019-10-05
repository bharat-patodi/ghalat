// Import statements
import React from 'react';
import { View, Text } from 'react-native';
import allStyles from '../styles/styles';

// Create and export component

export default class Question extends React.Component {
    render () {
        return (
            <View>
                <Text>Question #01</Text>
                <Text>Which of the following is an animal?</Text>
            </View>
        )
    }
}
