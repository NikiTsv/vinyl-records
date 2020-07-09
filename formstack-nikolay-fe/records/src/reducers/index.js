import user from './user';
import records from './records';

const rootReducer = (state = {}, action) => {
    console.log('reducing action', action.type);

    return {
        user: user(state.user, action),
        records: records(state.records, action)
    };
};

export default rootReducer;