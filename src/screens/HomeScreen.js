// Import statements
import React from 'react';
import { View, Button, Text } from 'react-native';
import allStyles from '../styles/styles';

// Create the component
class HomeScreen extends React.Component {
    render () {
        return (
            <View style={[allStyles.HomeScreen]}>
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

// Export the component
export default HomeScreen;





































































































/*
// import statements
import React from 'react';
import { Text, View, Button, TextInput, TouchableHighlight } from 'react-native';
import allStyles from '../styles/styles';
import { db } from '../db/config';
import PropTypes from 'prop-types';

// Logic
let itemsRef = db.ref('/items');
let addItem = (item) => {
    itemsRef.push({
        name: item
    });
};


// define the component
export default class HomeScreen extends React.Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    state = {
        name: '',
        items: [],
    };

    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }

    handleChange = (e) => {
        this.setState({
            name: e.nativeEvent.text
        });
    };

    handleSubmit = () => {
        addItem(this.state.name);
    }


    render() {
        return (

            <View style={[allStyles.HomeScreen]}>

                <View>
                    <Text style={{ fontSize: 20 }}>Welcome to the mind-bending game of Ghalat ... where the wrong answer is the right one. It is refreshing for the mind to try activities like these and I encourage everyone to play it for a while.</Text>
                    <Button
                        title="Begin Game"
                        onPress={
                            () => this.props.navigation.navigate('Question')
                        }
                    />
                </View>


                <View>
                    <Text>Add Item</Text>
                    <TextInput onChange={this.handleChange} />
                    <TouchableHighlight
                        underlayColor="white"
                        onPress={this.handleSubmit}
                    >
                        <Text>Add</Text>
                    </TouchableHighlight>
                </View>

                <View>
                    {this.state.items.map((item, index) => {
                        return (
                            <View key={index}>
                                <Text>{item.name}</Text>
                            </View>
                        );
                    })}
                </View>

            </View>
        )
    }
}

*/