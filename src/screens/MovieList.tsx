import React from "react";
import {  TouchableHighlight, Text } from "react-native";
import { Screens } from "../common/AppNavigator";
import { ScreenProps } from "../common/ScreenProps";

class MovieList extends React.Component<ScreenProps> {

    static navigationOptions = {
        title: "Movie List",
    };

    onPress = () => {
        this.props.navigation.navigate(Screens.MovieDetails);
    }

    render() {
        return (
            <TouchableHighlight 
                onPress={this.onPress}>
                <Text>Click Me</Text>
            </TouchableHighlight>
        );
    }

}

export default MovieList;
