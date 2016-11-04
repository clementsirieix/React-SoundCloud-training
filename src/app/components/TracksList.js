// @flow
import React from 'react';
import { connect } from 'react-redux';

import Track from './Track';

class TracksList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="tracks-list">
            {this.props.tracks.isLoading ? <h2>Loading...</h2> : null}
            {this.props.tracks.isError ? <h2>Oups something went wrong...</h2> : null}
            {!this.props.tracks.isError && !this.props.tracks.isLoading ? this.props.tracks.tracks.map((track, i) => <Track key={i} index={i} track={track} />) : null}
        </div>;
    }
}

TracksList.propTypes = {
    tracks: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        tracks: state.tracks
    };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TracksList);
