// @flow
import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../actions/tracksActions';

import Information from '../components/Information';
import TracksList from '../components/TracksList';

class Data extends React.Component {
    state: {
        readyToFetchTracks: boolean
    };
    handleClick: Function;
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { readyToFetchTracks: false };
    }
    handleClick(event) {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            readyToFetchTracks: true
        });
        this.props.fetchTracks(this.props.profile.id, this.props.sc);
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.profile.id !== nextProps.profile.id)
        this.setState({
            readyToFetchTracks: false
        });
    }
    render() {
        const profile = this.props.profile;
        return (
            <div>
                <Information
                    key={profile.id}
                    profilePic={profile.avatarUrl}
                    username={profile.username}
                    description={profile.description}
                    favoritesNumber={profile.publicFavoritesCount}
                    permalink={profile.permalinkUrl}
                    isError={profile.isError}
                    isLoading={profile.isLoading} />
                {!profile.isLoading && !profile.isError && !this.state.readyToFetchTracks ?
                    <button className="show-track" onClick={this.handleClick}>
                        <div className="shadow"></div>
                        <div className="bg">See tracks</div>
                        </button> : null}
                {this.state.readyToFetchTracks ? <div className="overflow-container"><TracksList /></div> : null}
            </div>
        )
    }
}

Data.propTypes = {
    profile: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTracks: (id, sc) => {
            dispatch(fetchTracks(id, sc));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
