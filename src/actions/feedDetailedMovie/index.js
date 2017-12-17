import types from './types';

export default{
    fetchDetailedMovie: (movieId) => ({
        type:    types.FETCH_DETAILED_MOVIE,
        payload: movieId
    }),
    fetchDetailedMovieSuccess: (movie) => ({
        type:    types.FETCH_DETAILED_MOVIE_SUCCESS,
        payload: movie
    }),
    fetchDetailedMovieFail: (error) => ({
        type:    types.FETCH_DETAILED_MOVIE_FAIL,
        payload: error
    }),
    clearDetailedMovie: () => ({
        type: types.CLEAR_DETAILED_MOVIE
    })
};
