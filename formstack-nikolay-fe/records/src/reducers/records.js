import * as actionTypes from '../actions/actionTypes';
import * as utility from '../services/records.utility';

const initialState = {
    items: [],
    isLoading: false
}

const records = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECORD_ADDED:
            return {
               ...state,
               items: [...state.items, action.payload]
            };
        case actionTypes.LOADING_RECORDS:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.RECORD_EDITED:
            return {
                ...state,
                items: utility.replaceEditedRecordInState(state.items, action.payload)
            };
        case actionTypes.RECORDS_LOADED:
            return {
                ...state,
                items: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
}

export default records