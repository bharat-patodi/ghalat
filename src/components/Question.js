// Import statements
import React from 'react';
import { View, Text } from 'react-native';
import allStyles from '../styles/styles';

// Create and export component

export default class Question extends React.Component {
    render () {
        return (
            <View style = {allStyles.Question}>
                <Text>{this.props.questionNumber}</Text>
                <Text>{this.props.questionText}</Text>
            </View>
        )
    }
}
