// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

// Components
export default class Movie extends Component {

    constructor () {
        super();

        this.handleLikingMovie = ::this._handleLikingMovie;
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
                            className = { Styles.likeMovie}
                            href = '#'
                            onClick = {this.handleLikingMovie }
                            title = { title }>
                        </a>
                    </p>

                </div>
            </section>

        );
    }
}