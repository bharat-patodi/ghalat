// Import statements
import React from 'react';
import { View, Text } from 'react-native';
import allStyles from '../styles/styles';


// Create the component

class ResultsScreen extends React.Component {
    render () {
        return (
            <View style = {[allStyles.HomeScreen, allStyles.MainContainer]}>
                <Text> This is the Results Screen Boy. </Text>
            </View>
        )
    }
}

// Export the component
export default ResultsScreen;