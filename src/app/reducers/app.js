import {FETCH_USER_SUCCESS, USER_PROFILE_UPDATE_SUCCESS, USER_PROFILE_UPDATE_FAILED} from '../const';
const initialState = {
    user: {
        first_name: '',
        last_name: '',
        email: ''
    }
};
export default function appReducer(state = initialState, action) {
    let alteredState = {};
    switch (action.type) {

        case FETCH_USER_SUCCESS:
            alteredState = {user: action.user};
            break;

        case USER_PROFILE_UPDATE_SUCCESS:
            alteredState = {user: action.user};
            break;
        case USER_PROFILE_UPDATE_FAILED:
            break;
        default:
            alteredState = {};
            break;
    }

    return Object.assign({}, state, alteredState);
}