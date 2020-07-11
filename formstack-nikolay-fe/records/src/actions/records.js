import * as actionTypes from './actionTypes';
import {getAll, putRecord} from '../services/records.http';

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

export const createEditRecord = (payload) => {
    return (dispatch) => {
        dispatch({type: actionTypes.LOADING_RECORDS})

        putRecord(payload).then((res) => {
            if(payload.id){
                dispatch({type: actionTypes.RECORD_EDITED, payload: res})
            }else{
                dispatch({type: actionTypes.RECORD_ADDED, payload: res})
            }
        }).catch(err=>{
            console.log('edit record failed', err);
        });
    }
}