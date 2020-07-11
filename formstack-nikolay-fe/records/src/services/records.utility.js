
export const replaceEditedRecordInState = (records, newOrEditedRecord) => {
    const existingRecordIndex = records.findIndex(r=> r.id == newOrEditedRecord.id);
    if(existingRecordIndex){
        records.splice(existingRecordIndex, 1, newOrEditedRecord);
    }else{
        records.push(newOrEditedRecord);
    }

    return records.slice(0);
}