// @flow
const profileReducer = (state: {
    id: number,
    username: string,
    avatarUrl: string,
    description: string,
    publicFavoritesCount: number,
    permalinkUrl: string,
    isError: boolean,
    isLoading: boolean
} = {
    id: 0,
    username: '',
    avatarUrl: '',
    description: '',
    publicFavoritesCount: 0,
    permalinkUrl: '',
    isError: false,
    isLoading: false
}, action: Object) => {
    switch (action.type) {
        case 'REQUEST_PROFILE':
            return {...state, isLoading: true};
        case 'PROFILE_ERROR':
            return {...state, isError: true, isLoading: false};
        case 'RECEIVE_PROFILE':
            return {...state, ...action.data, isError: false, isLoading: false};
        default:
            return {...state};
    }
};

export default profileReducer;
