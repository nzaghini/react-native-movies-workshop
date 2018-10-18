/* This model will be removed once we create actual network access and GraphQL types */
export interface Movie {
    id: string;
    title: string;
    year: string;
    director: Director;
}

export interface Movies {
    movies: Movie[];
}

export interface Director {
    firstName: string;
    lastName: string;
}
