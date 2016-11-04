// @flow
import React from 'react';
import StarIcon from '../icons/star';

const Information = ({ isLoading, isError, profilePic, permalink, username, description, favoritesNumber}: { isLoading: boolean, isError: boolean, profilePic: string, permalink: string, username: string, description: string, favoritesNumber: number}) => (
    <div className="information">
        <div className="small-column">
            {!isLoading && !isError ? <div className="profile-picture" style={{backgroundImage: `url(${profilePic})`}}></div>:null}
        </div>
        <div className="column">
            <div className="username">
                {isLoading ? 'Loading...':null}
                {isError && !isLoading ? 'Invalid user :(':null}
                {!isLoading && !isError ? <a href={permalink} target="_blank">{username}</a>:null}</div>
            <div className="description">{!isLoading && !isError ? description:null}</div>
        </div>
        <div className="small-column">
            <div className="favorites">
                {!isLoading && !isError ? <span>{favoritesNumber}<StarIcon /></span>:null}</div>
        </div>
    </div>
);
export default Information
