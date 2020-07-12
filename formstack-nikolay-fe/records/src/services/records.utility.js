
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

export const getRecordFromStateOrEmpty = (state, id) => {
    if(state && id){
        return this.state.items.filter(i => i.id == id)[0];
    }else{
        return createEmptyRecord();
    }
}