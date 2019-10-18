// import statements
import React from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
import allStyles from '../styles/styles';

// define the component
export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={[allStyles.HomeScreen]}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <Text style={{ fontSize: 20 }}>Welcome to the mind-bending game of Ghalat ... where the wrong answer is the right one. It is refreshing for the mind to try activities like these and I encourage everyone to play it for a while.</Text>
                    <Button
                        title="Begin Game"
                        onPress={
                            () => this.props.navigation.navigate('Question')
                        }
                    />
                </View>
            </View>
        )
    }
}