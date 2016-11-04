// @flow
const tracksReducer = (state: {
    tracks: Array<Object>,
    isError: boolean,
    isLoading: boolean
} = {
    tracks: [],
    isError: false,
    isLoading: false
}, action: Object) => {
    switch (action.type) {
        case 'REQUEST_TRACKS':
            return {...state, isLoading: true};
        case 'TRACKS_ERROR':
            return {...state, isError: true, isLoading: false};
        case 'RECEIVE_TRACKS':
            return {...state, tracks: action.data, isError: false, isLoading: false};
        default:
            return {...state};
    }
};

export default tracksReducer;
