import * as actionTypes from './actionTypes';
import {getAll} from '../services/records';

export const loadedRecordsFromServer = (payload) => {
    return {
        type: actionTypes.RECORDS_LOADED,
        payload
    }
}

export const loadRecords = (username) => {
    return (dispatch) => {
        dispatch({type: actionTypes.LOADING_RECORDS})

        getAll(username).then((res) => {
            dispatch(loadedRecordsFromServer(res));
        }).catch(err=>{
            console.log('load records failed', err);
        });
    }
}