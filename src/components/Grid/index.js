// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Instruments
import { array, object } from 'prop-types';
import Styles from './styles.scss';


// Components
import Movie from '../Movie';
import Navigation from '../Navigation';
import actions from 'actions/feed';

class Grid extends Component {

    static propTypes =  {
        genres:  array.isRequired,
        results: object.isRequired
    };

    static defaultProps = {
        results: []
    };

    mapGenreToGenreName(id, genres = []) {

        const genre = genres.find(item => item.id === id);

        if (genre) {
            return genre.name;
        }

        return '';
    }

    componentDidMount () {
        this.props.dispatch(actions.fetchNewMovies());
    }

    render () {

        const { results, genres } = this.props;

        const movieArray = results.map(({
            vote_count,
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
            release_date }, index) => {
            return (
                <Movie
                    adult = { adult }
                    backdrop_path = { backdrop_path }
                    id = { id }
                    index = { index }
                    genres = {
                        genre_ids.reduce((accum, genreId) => {
                                if (accum) {
                                    return `${accum}, ${this.mapGenreToGenreName(genreId, genres)}`;
                            }

                            return this.mapGenreToGenreName(genreId, genres);
                        }
                            , '')
                    }
                    genre_ids = { genre_ids }
                    original_language = { original_language }
                    original_title = { original_title }
                    overview = { overview }
                    popularity = { popularity }
                    poster_path = { poster_path }
                    release_date = { release_date }
                    title = { title }
                    video = { video }
                    vote_average = { vote_average }
                    vote_count = { vote_count }
                />
            );
        });

        return (
            <section className = { Styles.grid } >
                <div className = { Styles.navigation } >
                    <Navigation />
                </div>
                <div className = {  Styles.contentWrap }>
                    { movieArray }
                </div>
            </section>
        );
    }
}

export default connect()(Grid);