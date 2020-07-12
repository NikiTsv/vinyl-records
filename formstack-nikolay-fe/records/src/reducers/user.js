import * as actionTypes from '../actions/actionTypes';

const user = (state = {}, action) => {
    console.log(action)

    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                username: action.payload.username,
                isAuthenticated: true
            };
        case actionTypes.LOGOUT:
            return {
                username: '',
                isAuthenticated: false
            };
        default:
            return state;
    }
}

export default user