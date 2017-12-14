// Core
import React, { Component } from 'react';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router';

// Instruments
import pages from './pages';
import authActions from 'actions/auth';
import uiActions from 'actions/ui';

//Components
import Public from './Public';
import Private from './Private';

import Loading from '../components/Loading';

class Routes extends Component {
    static propTypes = {
        authenticated: bool.isRequired,
        history:       object.isRequired,
        initialize:    func.isRequired,
        initialized:   bool.isRequired,
        location:      object.isRequired,
        login:         func.isRequired
    };

    componentDidMount () {
        const {
            authenticated,
            history,
            initialize,
            location
        } = this.props;

        //console.log('### apiKey = ', apiKey);

        //const token = localStorage.getItem('token');
        //token ? login({ token }) : initialize();

        initialize();

        if (authenticated) {
            if (location.pathname === pages.profile) {
               return;
            }
            history.replace(pages.feed);
        }

    }

    componentWillReceiveProps ({ authenticated, initialized, location, history }) {
        if (authenticated && !initialized) {
            this.props.initialize();
        }

        if (authenticated) {
            if (location.pathname === pages.login ) {
                history.replace(pages.feed);
            }
        }
    }

    render() {
        const { authenticated, initialized } = this.props;
        return initialized ?
            <Switch>
                {!authenticated && <Public />}
                <Private />
            </Switch>
            :( <Loading />);
    }
}

const mapStateToProps = (state) => ({
    authenticated: state.auth.get('authenticated'),
    initialized:   state.ui.get('initialized')
});

const { initialize } = uiActions;
const { login } = authActions;

const mapDispatchToProps = (dispatch) => ({
    // function bindActionCreators<A extends ActionCreator<any>>(actionCreator: A, dispatch: Dispatch<any>)
    //...bindActionCreators(uiActions.initialize, authActions.login, dispatch)
    ...bindActionCreators({ initialize, login }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
