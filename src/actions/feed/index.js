import types from './types';

export default{
    fetchMovies: (type) => ({
        type:    types.FETCH_MOVIES,
        payload: type
    }),
    fetchMoviesSuccess: (movies) => ({
        type:    types.FETCH_MOVIES_SUCCESS,
        payload: movies
    }),
    fetchMoviesFail: (error) => ({
        type:    types.FETCH_MOVIES_FAIL,
        payload: error
    }),

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
