// Core
import React, { Component } from 'react';
import { bool, func, object } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

// Instruments
import uiActions from 'actions/ui';

//Components
import General from './General';

import Loading from '../components/Loading';

class Routes extends Component {
    static propTypes = {
        history:     object.isRequired,
        initialize:  func.isRequired,
        initialized: bool.isRequired,
        location:    object.isRequired
    };

    componentDidMount () {
        const { initialize } = this.props;

        initialize();
    }

    render () {
        const { initialized } = this.props;

        return initialized ? <General /> : (<Loading />);
    }
}

const mapStateToProps = (state) => ({
    initialized: state.ui.get('initialized')
});

const { initialize } = uiActions;

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ initialize }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
