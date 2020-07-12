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

export const createEmptyRecord = () => ({
        id: '',
        artist: '',
        album: '',
        isFav: false,
        description: '',
        pic: '',
        tracks: []})


// just showcasing reselect, though in this simple app we are not gaining anything
const getItemsSelector = (state, props) => {
    return state.records.items;
}

const getRouteIdParamSelector = (state, props) => {
    return props.match.params.id;
};

const combiner = (items, id) => {
    const item = items.filter(i => i.id == id)[0];
    const emptyItem = createEmptyRecord();
    return item ? item : emptyItem;
}

export const filteredByIdSelector = createSelector([getItemsSelector, getRouteIdParamSelector], combiner);
