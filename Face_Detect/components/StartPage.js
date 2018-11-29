import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";

class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
    }

    nextPage = () => {
        this.props.navigation.navigate("Questions", {});
    };

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text1}> Quiz</Text>
                <TouchableOpacity onPress={this.nextPage} style={styles.button_large}>
                    <Text style={styles.text}> Start Trivia Quiz</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button_large: {
        backgroundColor: "#ff7675",
        padding: 20,
        borderRadius: 40,
        width: 200,
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 20
    },
      text1: {
        color: "black",
        fontSize: 60,
        top:-150
    }
});

export default StartPage;
