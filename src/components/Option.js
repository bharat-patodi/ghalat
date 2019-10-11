// Import statements
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import allStyles from '../styles/styles';

// Create and export component

export default class Option extends React.Component {
    render () {
        return (
                <TouchableOpacity style={allStyles.Option} onPress = {this.props.answerType}><Text>{this.props.optionText}</Text></TouchableOpacity>
        )
    }
}
