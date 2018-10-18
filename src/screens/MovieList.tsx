import React from "react";
import {  ScrollView, Text } from "react-native";
import { Screens } from "../common/AppNavigator";
import { ScreenProps } from "../common/ScreenProps";

/* This model will be removed once we create actual network access and GraphQL types */
interface Movie {
    id: string;
    title: string;
    year: string;
    director: string;
}

interface Movies {
    movies: Movie[];
}

interface MovieListState {
    allMovies: Movies;
}

class MovieList extends React.Component<ScreenProps, MovieListState> {

    static navigationOptions = {
        title: "Movie List",
    };

    constructor(props: ScreenProps) {
        super(props);
        this.state = {
            allMovies: {
                movies: [],
            },
        };
    }

    componentDidMount() {
        // Pretend network kicked in here! 
        this.setState(
            {
                allMovies: {
                    movies: [
                        { id: "1", title: "Title 1", year: "2018", director: "" },
                        { id: "2", title: "Title 2", year: "2019", director: "" },
                    ],
                },
            },
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderMovies(this.state.allMovies)}
            </ScrollView>
        );
    }

    private onPress = () => {
        this.props.navigation.navigate(Screens.MovieDetails);
    }

    private renderMovies = (allMovies: Movies) => {
        return allMovies.movies.map((movie) => {
            return (
                <Text key={movie.id}>{movie.title}</Text>
            );
        });
    }

}

export default MovieList;
