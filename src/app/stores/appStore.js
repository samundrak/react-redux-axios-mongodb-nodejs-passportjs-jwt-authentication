import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {

    const devCreateStore = compose(
        applyMiddleware(reduxImmutableStateInvariant(), thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore);

    return devCreateStore(rootReducer, initialState);
}