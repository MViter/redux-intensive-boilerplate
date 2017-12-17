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
            return state.merge(payload);

        case types.CLEAR_DETAILED_MOVIE:
            return state;

        default:
            return state;
    }
};

export default feedDetailedMovieReducer;
