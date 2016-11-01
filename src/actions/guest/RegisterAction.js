import { CREATE_USER_FAILED, CREATE_USER_SUCCESS} from '../const';


export function registerSuccess(user, dispatch) {
    return {
        type: CREATE_USER_SUCCESS,
        user
    };
}

export function registerError(error) {
    return {
        type: CREATE_USER_FAILED,
        errors: error
    };
}

