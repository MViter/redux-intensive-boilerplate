// Core
import { createSelector } from 'reselect';

export const getDetailedMovie = createSelector(
    (state) => state,
    (detailedMovie) => detailedMovie.toJS()
);
