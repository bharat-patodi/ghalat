import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
    HomeScreen: {
        backgroundColor: '#00ff00',
    },

    GameScreen: {
        backgroundColor: '#00ff00',
    },

    QuestionScreen: {
        backgroundColor: '#00ff00',
    },

    ResultsScreen: {
        backgroundColor: '#00ff00',
    },

    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 200
    },
// The button properties are not propagating
    Button: {
        marginTop: 20,
        color: "#ecf0f1"
    }

});

export default allStyles;