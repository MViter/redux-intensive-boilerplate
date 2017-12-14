import types from './types';

export default{

    fetchDetailedMovie: () => ({
        type: types.FETCH_DETAILED_MOVIE
    }),
    fetchDetailedMovieSuccess: (movie) => ({
        type:    types.FETCH_DETAILED_MOVIE_SUCCESS,
        payload: movie
    }),
    fetchDetailedMovieFail: (error) => ({
        type:    types.FETCH_DETAILED_MOVIE_FAIL,
        payload: error
    }),
    // **************************************************** //
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
    }),
    // **************************************************** //
    fetchWishlist: () => ({
        type: types.FETCH_WISHLIST
    }),
    fetchWishlistSuccess: (movies) => ({
        type:    types.FETCH_WISHLIST_SUCCESS,
        payload: movies
    }),
    fetchWishlistFail: (message) => ({
        type:    types.FETCH_WISHLIST_FAIL,
        payload: message
    })
};
