// Import statements
import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

// Create the component
class Header extends React.Component {
    render() {
        return (
            <View>
                <Text>This is the Header.</Text>
            </View>
        )
    }
}
// Getting an issue that stylesheet.create is undefined



// Style the component
// const styles = Stylesheet.create({
//     styleMyHeader: {
//         // backgroundColor: '#ffc600';
//     },

//     styleMyText: {
//         // fontSize: 20
//     }
// })

// Export the component
export default Header;