import { StyleSheet } from 'react-native';

const allStyles = StyleSheet.create({
    HomeScreen: {
        backgroundColor: '#00ff00',
        flex: 1,
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
        fontSize: 20
    },

    TopOptionBar: {
        flexDirection: "row"
    },

    BottomOptionBar: {
        flexDirection: "row"
    },

// The button properties are not propagating
    ButtonStyle: {
        marginTop: 20,
        color: "#ecf0f1"
    },

    Question: {
        // flex: 1
    },

    Option: {
        flex: 2,
        padding: 10,
        borderWidth: 5,
        borderColor: '#ecf0f1',
        margin: 10,
        alignItems: "center"
    },

    AllOptions: {
        // flex: 1
    }

});

export default allStyles;