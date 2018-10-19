import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScreenProps} from "../common/ScreenProps";
import { ALL_MOVIES_QUERY_movies as Movie } from "../queries/models/ALL_MOVIES_QUERY";

interface MovieDetailsProps extends ScreenProps {
    movie: Movie;
}

class MovieDetail extends React.Component<MovieDetailsProps> {

    static navigationOptions = {
        title: "Movie Details",
    };

    render() {
        const movie = this.props.movie || this.props.navigation.getParam("movie");
        if (!movie) { return <Text>Something wrong going on here!</Text>; }

        const { container, title, director, year} = styles;
        const directorName = `Director: ${movie.director.firstName} ${movie.director.lastName}`;

        return (
            <View style={container}>
                <Text style={title}>{movie.title}</Text>
                <Text style={director}>{directorName}</Text>
                <Text style={year}>Year: {movie.year}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 60,
        padding: 5,
    },
    director: {
        fontSize: 20,
        padding: 5,
        color: "#a9a9a9",
    },
    year: {
        fontSize: 10,
        padding: 5,
        color: "#a9a9a9",
    },
});

export default MovieDetail;
