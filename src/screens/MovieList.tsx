import React from "react";
import {  ScrollView, Text } from "react-native";
import { Screens } from "../common/AppNavigator";
import { ScreenProps } from "../common/ScreenProps";
import { Movies, Movie } from "../common/Models";
import MovieItem from "../components/MovieItem";

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
                        { id: "1", title: "Title 1", year: "2018", director: {
                            firstName: "First Name 1",
                            lastName: "Last Name 1",
                        } },
                        { id: "2", title: "Title 2", year: "2019", director: {
                            firstName: "First Name 2",
                            lastName: "Last Name 2",
                        } },
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

    private onPress = (movie: Movie) => {
        this.props.navigation.navigate(Screens.MovieDetails, {movie});
    }

    private renderMovies = (allMovies: Movies) => {
        return allMovies.movies.map((movie) => {
            return (
                <MovieItem key={movie.id} movie={movie} action={this.onPress} />
            );
        });
    }

}

export default MovieList;
