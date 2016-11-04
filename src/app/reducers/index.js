import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import appReducer from '../reducers/app';
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    app: appReducer,
    toastr: toastrReducer,
    form: formReducer
});

export  default rootReducer;