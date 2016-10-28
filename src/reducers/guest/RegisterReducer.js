import {CREATE_USER} from  '../../actions/const';
export default function registerReducer(state = [], action) {

    switch (action.type) {
        case  CREATE_USER :
            console.log('i am register reducer');
            return [...state, Object.assign({}, action.course)];
        default:
            return state;
    }
}