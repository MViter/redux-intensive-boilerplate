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
    })
};
