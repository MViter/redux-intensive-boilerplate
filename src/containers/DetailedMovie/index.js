// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles.scss';
import { bool, string, number, object } from 'prop-types';
import { NavLink } from 'react-router-dom';
import pages from 'routes/pages';
import backgroung from '../../theme/assets/background.jpg';

// Actions
import uiActions from 'actions/ui';
import feedDetailedMovieActions from 'actions/feedDetailedMovie';

// Component
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';

class DetailedMovie extends Component {

    static propTypes = {
        feedFetching:  bool.isRequired,
        detailedMovie: object.isRequired,
        genres:        string.isRequired,
        id:            number.isRequired,
        index:         string.isRequired,
        overview:      string.isRequired,
        popularity:    number.isRequired,
        posterPath:    string.isRequired,
        releaseDate:   string.isRequired,
        status:        string.isRequired,
        tagline:       string.isRequired,
        title:         string.isRequired,
        voteAverage:   number.isRequired
    };

    static defaultProps = {
        feedFetching: false,
        genres:       '',
        id:           0,
        index:        '',
        overview:     '',
        popularity:   0,
        posterPath:   '',
        releaseDate:  '',
        tagline:      '',
        title:        '',
        voteAverage:  0
    };

    componentWillMount () {
        this.props.actions.fetchDetailedMovie(this.props.match.params.id);

    }

    render () {
        const {
            backdrop_path:backdropPath,
            id,
            index,
            genres,
            overview,
            popularity,
            poster_path:posterPath,
            release_date:releaseDate,
            runtime,
            tagline,
            title,
            vote_average:voteAverage,
            feedFetching
        } = this.props.detailedMovie;

        const mapGenresToArray = genres.map((item) => item.name);

        const adaptedGenres = mapGenresToArray.join(', ');

        const adaptedPosterPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        const adaptedBackdropPath = backdropPath
            ? `https://image.tmdb.org/t/p/w640${backdropPath}`
            : backgroung;

        const movieItem =
            <section className = { Styles.movieItemContainer } key = { index }>
                <section className = { Styles.backgroudPoster } >
                    <img alt = { title } src = { adaptedBackdropPath } />
                </section>
                <section className = { Styles.movie } >
                    <div className = { Styles.poster } >
                        <a href = '#'>
                            <img alt = { title } src = { adaptedPosterPath } />
                        </a>
                    </div>
                    <div className = { Styles.info } >
                        <p className = { Styles.infoHeader } >
                            <a className = { Styles.title } href = '#'>{ title }</a>
                            <span className = { Styles.vote }>{ voteAverage }</span>
                        </p>
                        <p className = { Styles.tagline } >
                            { tagline }
                        </p>
                        <p className = { Styles.meta_flex } >
                            <span className = { Styles.releaseDate } >{ releaseDate }</span>
                            <span className = { Styles.genres } >{ adaptedGenres }</span>
                        </p>
                        <p className = { Styles.overview } >
                            { overview }
                        </p>
                        <div className = { Styles.infoAdditional } >
                            <p className = { Styles.runtime } >
                                { runtime }
                            </p>
                            <p className = { Styles.popularity } >
                                { popularity }
                            </p>
                        </div>
                        <p className = { Styles.infoFooter }>
                            <div className = { Styles.chosenHeart } />
                        </p>
                        <div className = { Styles.returnSection }>
                            <NavLink
                                activeClassName = { Styles.active }
                                className = { Styles.returnBtn }
                                title = 'Back'
                                to = { pages.feed }>Back
                            </NavLink>
                        </div>
                    </div>

                </section>

            </section>;

        return [
            <Navigation key = '0' />,
            feedFetching?
                <Spinner key = '1' spin = { feedFetching } />
                :
                <section key = '1'>
                    { movieItem }
                </section>
        ];
    }
}

const mapStateToProps = (state) => {
    return {
        detailedMovie: state.feedDetailedMovie.toJS()
    };
};

const { startFetchingFeed, stopFetchingFeed } = uiActions;
const { fetchDetailedMovie } = feedDetailedMovieActions;
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        { fetchDetailedMovie, startFetchingFeed, stopFetchingFeed },
        dispatch
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedMovie);
