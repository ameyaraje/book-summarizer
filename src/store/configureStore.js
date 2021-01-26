import { combineReducers, createStore } from 'redux';

import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        filters: filtersReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};