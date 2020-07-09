import * as actionTypes from '../actions/actionTypes';

const records = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.RECORD_ADDED:
            return {
               ...state,
               items: [...state.items, action.payload]
            };
        case actionTypes.RECORD_DELETED:
            return {
                ...state,
                items: state.items.filter(r=> r.id != action.payload.id)
            };
        default:
            return state;
    }
}

export default records