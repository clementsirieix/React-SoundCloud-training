// @flow
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'

import profile from './reducers/profileReducer';
import tracks from './reducers/tracksReducer';

export default createStore(
    combineReducers({
        profile,
        tracks
    }),
    {},
    applyMiddleware(thunk)
);
