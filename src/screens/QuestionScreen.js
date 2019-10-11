// Import statements
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Importing components
import Question from '../components/Question';
import Option from '../components/Option';
// Importing logic and styles
import allStyles from '../styles/styles';
import correctAnswer from '../logic/CorrectAnswer';
import incorrectAnswer from '../logic/IncorrectAnswer';


// Create the component

class QuestionScreen extends React.Component {
    render () {
        return (
            <View style = {[allStyles.HomeScreen, allStyles.MainContainer]}>
                <Question questionNumber="Question #02" questionText= "Which of the following is an animal?"/>
                    <View style={allStyles.TopOptionBar}>
                        <Option optionText="Cheetah" answerType={incorrectAnswer} />
                        <Option optionText = "Blue Pinch that goes for the ultimate kill" answerType = {correctAnswer} />
                    </View>
                    <View style={allStyles.BottomOptionBar}>
                        <Option optionText = "Human Kid" answerType = {correctAnswer} />
                        <Option optionText = "Elephant" answerType = {correctAnswer} />
                    </View>
            </View>
        )
    }
}

// Export the component
export default QuestionScreen;