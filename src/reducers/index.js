import {combineReducers} from 'redux';
import register from './guest/RegisterReducer';
import login from './guest/LoginReducer';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    register,
    login,
    toastr: toastrReducer,
    form: formReducer
});

export  default rootReducer;