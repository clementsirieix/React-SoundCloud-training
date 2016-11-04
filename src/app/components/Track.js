// @flow
import React from 'react';

const Track = ({ index, track }: { index: number, track: Object }) => (
    <div className="track">
        <div className="cover-img" style={{backgroundImage: `url(${track.artwork_url})`}}></div>
        <div className="info">
            <div className="title"><a href={track.permalink_url} target="_blank">{track.title}</a></div>
            <div className="artist">{track.user.username}</div>
        </div>
    </div>
);
export default Track
