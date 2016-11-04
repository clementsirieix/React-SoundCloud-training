// @flow
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Soundcloud from 'soundcloud';

import Header from '../components/Header';
import Search from '../components/Search';
import { fetchProfile } from '../actions/profileActions';
import SoundcloudConfig from '../config/soundcloudConfig';

class App extends React.Component {
    state: {
        sc: Object
    };
    constructor(props) {
        super(props);
        Soundcloud.initialize(SoundcloudConfig);
        this.state = { sc: Soundcloud };
    }
    render() {
        return (
            <div className="container">
                <Header />
                <Search query={this.props.params.id} validate={(value) => this.props.fetchProfile(value, this.state.sc)}/>
                    {React.cloneElement(this.props.children, {...this.props, sc: this.state.sc})}
            </div>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfile: (query, sc) => {
            browserHistory.push(`/${query}`);
            dispatch(fetchProfile(query, sc));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
