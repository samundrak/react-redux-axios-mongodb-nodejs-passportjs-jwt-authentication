import {toastr} from 'react-redux-toastr';

export default function toast(message = '', type = 'success') {
    return toastr[type](type.toUpperCase(), message);
}