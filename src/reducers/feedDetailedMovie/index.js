// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/feedDetailedMovie/types';

const initialState = Map({
    id:          '',
    index:       '',
    genres:      [],
    overview:    '',
    posterPath:  '',
    releaseDate: '',
    title:       '',
    voteAverage: ''
});

const feedDetailedMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_DETAILED_MOVIE_SUCCESS:
            console.log('getDetails in Reducers/FETCH_DETAILED_MOVIE_SUCCESS - 3');
            return state.merge(payload);
            //return state.merge(payload);

        default:
            return state;
    }
};

export default feedDetailedMovieReducer;
