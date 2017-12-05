// Core
import React, { Component } from 'react';

// Instruments
import { array } from 'prop-types';
import Styles from './styles.scss';

// Components
import Movie from '../Movie';
import Navigation from '../Navigation';
export default class Grid extends Component {

    static propTypes = {
      results: array.isRequired
    };

    mapGenreToGenreName(id, genres = []) {
        const genre = genres.find(item => item.id === id);
        if(genre) {
            return genre.name;
        }

        return '';
    }

    render () {

        const { results, genres } = this.props;

        //console.log('$$genres', genres);

        const moovieArray = results.map(({   vote_count,
                                             id,
                                             video,
                                             vote_average,
                                             title,
                                             popularity,
                                             poster_path,
                                             original_language,
                                             original_title,
                                             genre_ids,
                                             backdrop_path,
                                             adult,
                                             overview,
                                             release_date}, index) => (
            <Movie
                vote_count = { vote_count }
                id = { id }
                video = { video }
                vote_average = { vote_average }
                title = { title }
                popularity = { popularity }
                poster_path = { poster_path }
                original_language = { original_language }
                original_title = { original_title }
                genre_ids = { genre_ids }
                genres = {
                    genre_ids.reduce((accum, genreId) => {
                            if(accum) {
                                return `${accum}, ${this.mapGenreToGenreName(genreId, genres)}`
                            }

                            return this.mapGenreToGenreName(genreId, genres);
                        }
                    , '')
                }

                backdrop_path = { backdrop_path }
                adult = { adult }
                overview = { overview }
                release_date = { release_date }
                index = { index }
            />
        ));

        return (
            <section className = { Styles.grid } >
                <div className = { Styles.navigation } >
                    <Navigation />
                </div>
                <div className = {  Styles.contentWrap }>
                    { moovieArray }
                </div>
            </section>
        );
    }
}