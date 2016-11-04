// @flow
function requestTracks(payload) {
    return {
        type: 'REQUEST_TRACKS',
        payload
    };
}

function receiveErrorTracks(payload) {
    return {
        type: 'TRACKS_ERROR',
        payload
    };
}

function receiveTracks(payload, data) {
    return {
        type: 'RECEIVE_TRACKS',
        payload,
        data
    };
}

export function fetchTracks(id: number, sc: Object) {
    return function(dispatch: Function) {
        dispatch(requestTracks(id));
        return sc
                .get(`/users/${id}/favorites`)
                .then(
                    (data) => ( dispatch(receiveTracks(id, data)) ),
                    (error) => ( dispatch(receiveErrorTracks(error)) )
                );
    };
}
