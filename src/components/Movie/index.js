// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

// Components

export default class Movie extends Component {

    static propTypes = {

    };

    constructor () {
        super();

        this.handleLikeMovie = ::this._handleLikeMovie;
    }


    state = {
        vote_count: 0,
        id: '',
        video: false,
        vote_average: 0,
        title: '',
        popularity: 0,
        poster_path: '',
        original_language: '',
        original_title:  '',
        genre_ids:  '',
        backdrop_path: '',
        adult: false,
        overview: '',
        release_date: ''
    };

    _handleLikeMovie(event) {

        const movieTitle = event.target.title;

        try {

            if ( localStorage.getItem('LikedMovies') !== null) {
                    const prevStorage = localStorage.getItem('LikedMovies')+ ',';

                    if(prevStorage.indexOf(movieTitle) === -1) {
                        localStorage.setItem('LikedMovies', prevStorage.concat(movieTitle));
                        event.target.className = 'Styles.likedMovie';
                    }

            } else {
                localStorage.setItem('LikedMovies', movieTitle);
            }
        } catch (e) {
           alert('Error: ', e.text);
            return 0;
        }
    }

    render () {

        const {
            adult,
            backdrop_path,
            id,
            index,
            genres,
            original_language,
            original_title,
            overview,
            popularity,
            poster_path,
            release_date,
            title,
            vote_count,
            video,
            vote_average
        } = this.props;

        const adaptedPoaterPath = 'https://image.tmdb.org/t/p/w500' + poster_path;
        const adaptedBackgroundPath = 'https://image.tmdb.org/t/p/w780' + backdrop_path;
        const isLiked =  localStorage.getItem('LikedMovies').indexOf(localStorage.getItem(event.target.title)) === -1
            ? Styles.likeMovie
            : Styles.likedMovie;

        return (

            <section className = { Styles.movie }>
                <div className = { Styles.poster } >
                    <a href="#">
                        <img src = { adaptedPoaterPath } alt = { title } />
                    </a>
                </div>

                <div className = { Styles.info } >
                    <p className = { Styles.infoHeader } >
                        <a className = { Styles.infoHeader_title} href="#">{ title }</a>
                        <span className = { Styles.infoHeader_vote }>{ vote_average }</span>
                    </p>
                    <p className = { Styles.meta_flex} >
                        <span className = { Styles.releaseDate } >{ release_date }</span>
                        <span className = { Styles.genres } >{ genres } </span>
                    </p>
                    <p className = { Styles.overview } >
                        { overview }
                    </p>
                    <p className = { Styles.infoFooter }>
                        <a className = { Styles.viewMove} href = '#' title = 'View more info' alt = { title } > More Info </a>
                        <a
                            alt = 'I like it'
                            className = { isLiked }
                            href = '#'
                            onClick = {this.handleLikeMovie }
                            title = { title }>
                        </a>
                    </p>

                </div>
            </section>

        );
    }
}