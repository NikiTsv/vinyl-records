import { createSelector } from 'reselect';

export const replaceEditedRecordInState = (records, newOrEditedRecord) => {
    const existingRecordIndex = records.findIndex(r => r.id == newOrEditedRecord.id);
    if (existingRecordIndex) {
        records.splice(existingRecordIndex, 1, newOrEditedRecord);
    } else {
        records.push(newOrEditedRecord);
    }

    return records.slice(0);
}

const createEmptyRecord = () => ({
    id: '',
    artist: '',
    album: '',
    isFav: false,
    description: '',
    pic: '',
    tracks: []
})


// just showcasing reselect, though in this simple app we are not gaining anything
const getItemsSelector = (state, id) => {
    return state.records.items;
}

const getRouteIdParamSelector = (recordsState, props) => {
    return props.match.params.id;
};

const combiner = (items, id) => {
    return id ? items.filter(i => i.id == id)[0] : createEmptyRecord();
}

export const filteredByIdSelector = (state, id) => createSelector([getRouteIdParamSelector, getItemsSelector], combiner);
