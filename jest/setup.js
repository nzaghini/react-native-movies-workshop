jest.mock('../src/common/AppNavigator', () => ({
    AppNavigator: {
        router: {
            MovieList: jest.fn(),
            MovieDetails: jest.fn()
        }
    }
}));