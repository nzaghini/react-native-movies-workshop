import React from "react";
import {  Text } from "react-native";

class MovieDetail extends React.Component {

    static navigationOptions = {
        title: "Movie Details",
    };

    render() {
        return (
            <Text>I am a detail</Text>
        );
    }

}

export default MovieDetail;
