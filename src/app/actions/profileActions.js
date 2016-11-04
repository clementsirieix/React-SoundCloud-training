// @flow
function requestProfile(payload) {
    return {
        type: 'REQUEST_PROFILE',
        payload
    };
}

function receiveErrorProfile(payload) {
    return {
        type: 'PROFILE_ERROR',
        payload
    };
}

function receiveProfile(payload, data) {
    return {
        type: 'RECEIVE_PROFILE',
        payload,
        data
    };
}

export function fetchProfile(profile: string, sc: Object) {
    return function(dispatch: Function) {
        dispatch(requestProfile(profile));
        return sc.get(`/users/${profile}`)
            .then( (data) => (
                dispatch(receiveProfile(profile, {
                  id: data.id,
                  username: data.username,
                  avatarUrl: data.avatar_url,
                  description: data.description,
                  publicFavoritesCount: data.public_favorites_count,
                  permalinkUrl: data.permalink_url
                }))
            ), (error) => (
                dispatch(receiveErrorProfile(error))
            ));
    };
}
