// Core
import { Map } from 'immutable';

// Instruments
import types from 'actions/detailedMovie/types';

const initialState = Map({
    budget:               '',
    id:                   '',
    index:                '',
    genres:               [],
    overview:             '',
    posterPath:           '',
    production_companies: [], // eslint-disable-line camelcase
    production_countries: [], // eslint-disable-line camelcase
    releaseDate:          '',
    revenue:              '',
    title:                '',
    voteAverage:          ''
});

const feedDetailedMovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FETCH_DETAILED_MOVIE_SUCCESS:
            return state.merge(payload);

        case types.CLEAR_DETAILED_MOVIE:
            return initialState;

        default:
            return state;
    }
};

export default feedDetailedMovieReducer;
