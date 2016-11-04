import {STORE_TOKEN} from './const';
export function storeToken(token) {
    if(window.localStorage){
    }
    return {
        type: STORE_TOKEN,
        token
    }
}