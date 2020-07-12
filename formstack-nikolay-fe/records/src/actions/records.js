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

export const createEditRecord = (data, changeRouteFn) => {

    return (dispatch) => {
        dispatch({type: actionTypes.LOADING_RECORDS})

        putRecord(data).then((res) => {
            changeRouteFn();

            if(data.id){
                dispatch({type: actionTypes.RECORD_EDITED, payload: res})
            }else{
                dispatch({type: actionTypes.RECORD_ADDED, payload: res})
            }
        }).catch(err=>{
            console.log('edit record failed', err);
        });
    }
}