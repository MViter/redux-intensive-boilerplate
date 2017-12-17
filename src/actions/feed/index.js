import types from './types';

export default{

    fetchNewMovies: () => ({
        type: types.FETCH_NEW_MOVIES
    }),
    fetchNewMoviesSuccess: (movies) => ({
        type:    types.FETCH_NEW_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchNewMoviesFail: (error) => ({
        type:    types.FETCH_NEW_MOVIES_FAIL,
        payload: error
    }),
    // **************************************************** //
    fetchUpcomingMovies: () => ({
        type: types.FETCH_UPCOMING_MOVIES
    }),
    fetchUpcomingMoviesSuccess: (movies) => ({
        type:    types.FETCH_UPCOMING_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchUpcomingMoviesFail: (error) => ({
        type:    types.FETCH_UPCOMING_MOVIES_FAIL,
        payload: error
    }),
    // **************************************************** //
    fetchPopularMovies: () => ({
        type: types.FETCH_POPULAR_MOVIES
    }),
    fetchPopularMoviesSuccess: (movies) => ({
        type:    types.FETCH_POPULAR_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchPopularMoviesFail: (error) => ({
        type:    types.FETCH_POPULAR_MOVIES_FAIL,
        payload: error
    }),
    // **************************************************** //
    fetchTopRatedMovies: () => ({
        type: types.FETCH_TOPRATED_MOVIES
    }),
    fetchTopRatedMoviesSuccess: (movies) => ({
        type:    types.FETCH_TOPRATED_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchTopRatedMoviesFail: (error) => ({
        type:    types.FETCH_TOPRATED_MOVIES_FAIL,
        payload: error
    }),
    // **************************************************** //
    fetchGenres: () => ({
        type: types.FETCH_GENRES
    }),
    fetchGenresSuccess: (genres) => ({
        type:    types.FETCH_GENRES_SUCCESS,
        payload: genres
    }),
    fetchGenresFail: (error) => ({
        type:    types.FETCH_GENRES_FAIL,
        payload: error
    })
};
