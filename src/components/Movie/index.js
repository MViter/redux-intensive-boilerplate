// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { func, bool, string, number } from 'prop-types';

// Components

export default class Movie extends Component {

    static propTypes = {
        genres:      string.isRequired,
        getFullInfo: func.isRequired,
        id:          number.isRequired,
        index:       string.isRequired,
        overview:    string.isRequired,
        posterPath:  string.isRequired,
        releaseDate: string.isRequired,
        title:       string.isRequired,
        voteAverage: number.isRequired,
        wishList:    bool.isRequired
    };

    static defaultProps = {
        id:          '',
        overview:    '',
        posterPath:  '',
        releaseDate: '',
        title:       '',
        voteAverage: 0
    };

    constructor () {
        super();

        this.handleLikeMovie = ::this._handleLikeMovie;
        this._likeDesign = ::this._likeDesign;
        localStorage.setItem('LikedMovies', 'Thor: Ragnarok');
    }

    _handleLikeMovie(event) {

        const movieTitle = event.target.title;
        const likedMovieStorage = localStorage.getItem('LikedMovies');

        try {

            if (likedMovieStorage) {

                if (likedMovieStorage.indexOf(movieTitle) === -1) {
                    localStorage.setItem('LikedMovies', likedMovieStorage.concat(movieTitle));

                } else {
                    const unlikedPosStart = likedMovieStorage.indexOf(movieTitle);
                    const unlikedPosEnd = likedMovieStorage.indexOf(',', unlikedPosStart);
                    const storageWithoutUnlikedMovie = likedMovieStorage.slice(0, unlikedPosStart).concat(likedMovieStorage.slice(unlikedPosEnd, likedMovieStorage.length-1));

                    localStorage.removeItem('LikedMovies');
                    localStorage.setItem('LikedMovies', storageWithoutUnlikedMovie);
                }

            } else {
                localStorage.setItem('LikedMovies', movieTitle);
            }

            this._likeDesign(movieTitle);
            this.forceUpdate();
        } catch (e) {
            console.log('Error: ', e.text);
            return 0;
        }
    }

    _likeDesign (movie) {

        const isMovieInStorage = (localStorage.getItem('LikedMovies')).indexOf(movie) !== -1;
        return isMovieInStorage
            ? <a alt = 'Add to wishlist' className = { Styles.chosenHeart } title = { movie } onClick = { this.handleLikeMovie } />
            : <a alt = 'Add to wishlist' className = { Styles.heart } title = { movie } onClick = { this.handleLikeMovie } />;
    }

    render () {

        const movieTitle = this.props.title;
        const like = this._likeDesign(movieTitle);

        const {
            id,
            index,
            genres,
            overview,
            posterPath,
            releaseDate,
            title,
            voteAverage
        } = this.props;

        const adaptedPosterPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        // const isLiked =  localStorage.getItem('LikedMovies').indexOf(localStorage.getItem(event.target.title)) === -1
        //     ? Styles.likeMovie
        //     : Styles.likedMovie;
        const linkToMovie = `https://www.themoviedb.org/movie/${id}`;

        return (

            <section className = { Styles.movie } key = { index } >
                <div className = { Styles.poster } >
                    <a href = { linkToMovie }>
                        <img alt = { title } src = { adaptedPosterPath } />
                    </a>
                </div>

                <div className = { Styles.info } >
                    <p className = { Styles.infoHeader } >
                        <a className = { Styles.infoHeader_title } href = '#'>{ title }</a>
                        <span className = { Styles.infoHeader_vote }>{ voteAverage }</span>
                    </p>
                    <p className = { Styles.meta_flex } >
                        <span className = { Styles.releaseDate } >{ releaseDate }</span>
                        <span className = { Styles.genres } >{ genres } </span>
                    </p>
                    <p className = { Styles.overview } >
                        { overview }
                    </p>
                    <p className = { Styles.infoFooter }>
                        <a alt = { title } className = { Styles.viewMove } href = '#' title = 'View more info'>More Info</a>
                        { like }
                    </p>

                </div>
            </section>

        );
    }
}
