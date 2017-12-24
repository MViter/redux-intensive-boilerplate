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
import feedDetailedMovieActions from 'actions/detailedMovie';

// Component
import Catcher from 'components/Catcher';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';

class DetailedMovie extends Component {

    static propTypes = {
        actions:       object.isRequired,
        budget:        number.isRequired,
        detailedMovie: object.isRequired,
        feedFetching:  bool.isRequired,
        genres:        string.isRequired,
        id:            number.isRequired,
        index:         string.isRequired,
        overview:      string.isRequired,
        popularity:    number.isRequired,
        posterPath:    string.isRequired,
        releaseDate:   string.isRequired,
        tagline:       string.isRequired,
        title:         string.isRequired,
        voteAverage:   number.isRequired,
        revenue:       number
    };

    static defaultProps = {
        budget:       0,
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
        this.props.actions.fetchDetailedMovie(this.props.match.params.id); // eslint-disable-line
    }

    componentWillUnmount () {
        this.props.actions.clearDetailedMovie();
    }

    render () {

        //         [{name: "Walt Disney Pictures", id: 2}, {name: "Pixar Animation Studios", id: 3}]
        const {
            backdrop_path:backdropPath,
            budget,
            index,
            genres,
            overview,
            popularity,
            poster_path : posterPath,
            production_companies : productionCompanies,
            production_countries : productionCountries,
            release_date:releaseDate,
            revenue,
            runtime,
            tagline,
            title,
            vote_average:voteAverage
        } = this.props.detailedMovie;

        const { feedFetching } = this.props;

        const adaptedGenres = genres.map((item) => item.name).join(', ');
        const adaptedProductionCompanies = productionCompanies.map((item) => item.name).join(', ');
        const adaptedProductionCountries = productionCountries.map((item) => item.name).join(', ');

        const adaptedPosterPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
        const adaptedBackdropPath = backdropPath
            ? `https://image.tmdb.org/t/p/w640${backdropPath}`
            : backgroung;

        const movieItem =
            <section className = { Styles.detailedMovieContainer } key = { index }>
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
                        <p className = { Styles.headerInfo } >
                            <a className = { Styles.title } href = '#'>{ title }</a>
                            <span className = { Styles.vote }>{ voteAverage }</span>
                        </p>
                        <p className = { Styles.taglineInfo } >
                            { tagline }
                        </p>
                        <div className = { Styles.generalInfo } >
                            <span className = { Styles.releaseDate } >{ releaseDate }</span>
                            <span className = { Styles.genres } >{ adaptedGenres }</span>
                        </div>
                        <div className = { Styles.productionDetailsInfo }>
                            <p className = { Styles.productionInfo }>
                                <span className = { Styles.productionPlaces }>Production company: { adaptedProductionCompanies }</span>
                                <span className = { Styles.productionPlaces }>Country: { adaptedProductionCountries } </span>
                            </p>
                            <p className = { Styles.moneyInfo }>
                                <span className = { Styles.moneyDetails }>Budget $ { budget }</span>
                                <span className = { Styles.moneyDetails }>Revenue $ { revenue } </span>
                            </p>
                        </div>

                        <p className = { Styles.overview } >
                            { overview }
                        </p>
                        <div className = { Styles.additionalInfo } >
                            <p className = { Styles.runtime } >
                                { runtime }
                            </p>
                            <p className = { Styles.popularity } >
                                { popularity }
                            </p>
                        </div>
                        <p className = { Styles.footerInfo }>
                            <NavLink
                                activeClassName = { Styles.active }
                                className = { Styles.returnBtn }
                                title = 'Back'
                                to = { pages.feed }>Back
                            </NavLink>
                        </p>
                    </div>
                </section>

            </section>;

        return (
            <Catcher key = '0'>
                <section key = '1'>
                    <div>
                        <Navigation fetchWatchlist = { this.fetchWatchlist } />
                    </div>
                    <div>
                        { movieItem }
                    </div>
                </section>,
                <Spinner key = '2' spin = { feedFetching } />
            </Catcher>
        );
    }
}

const mapStateToProps = (state) => (
    {
        feedFetching:  state.ui.feedFetching,
        detailedMovie: state.feedDetailedMovie.toJS()
    }
);


const { startFetchingFeed, stopFetchingFeed } = uiActions;
const { fetchDetailedMovie } = feedDetailedMovieActions;
const { clearDetailedMovie } = feedDetailedMovieActions;


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        { clearDetailedMovie, fetchDetailedMovie, startFetchingFeed, stopFetchingFeed }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedMovie);
