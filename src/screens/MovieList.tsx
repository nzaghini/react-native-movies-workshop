import React from "react";
import {  ScrollView, ActivityIndicator, StyleSheet, Text } from "react-native";
import { Query } from "react-apollo";
import { Screens } from "../common/AppNavigator";
import { ScreenProps } from "../common/ScreenProps";
import MovieItem from "../components/MovieItem";
import { ALL_MOVIES_QUERY } from "../queries/queries.graphql";
import { ALL_MOVIES_QUERY_movies as Movie,
         ALL_MOVIES_QUERY as Movies} from "../queries/models/ALL_MOVIES_QUERY";

interface MovieListState {
    allMovies: Movies;
}

class MovieList extends React.Component<ScreenProps, MovieListState> {

    static navigationOptions = {
        title: "Movie List",
    };

    render() {
        return (
            <Query query={ALL_MOVIES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <ActivityIndicator style={styles.loadingIndicator} />;
                    }
                    if (error) {
                        return <Text>{`Error: ${error}`}</Text>;
                    }
                    return (
                        <ScrollView>
                            {this.renderMovies(data)}
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }

    private onPress = (movie: Movie) => {
        this.props.navigation.navigate(Screens.MovieDetails, {movie});
    }

    private renderMovies = (allMovies: Movies) => {
        if (!allMovies || !allMovies.movies) {
            return null;
        }
        return allMovies.movies.map((movie) => {
            return (
                <MovieItem key={movie.id} movie={movie} action={this.onPress} />
            );
        });
    }

}

const styles = StyleSheet.create({
    loadingIndicator: {
        flex: 1,
    },
});

export default MovieList;
