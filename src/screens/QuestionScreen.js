// Import statements
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import allStyles from '../styles/styles';
import Question from '../components/Question';
import Option from '../components/Option';


// Create the component

class QuestionScreen extends React.Component {
    render () {
        return (
            <View style = {[allStyles.HomeScreen, allStyles.MainContainer]}>
                <Question questionNumber = "Question #01" />
                <Option />
                <Option />
                <Option />
                <Option />
            </View>
        )
    }
}

// Export the component
export default QuestionScreen;