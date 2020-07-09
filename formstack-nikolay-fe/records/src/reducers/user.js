import * as actionTypes from '../actions/actionTypes';

const user = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            return {
                email: action.payload.email,
                name: action.payload.name,
                isAuthenticated: true
            };
        default:
            return state;
    }
}

export default user