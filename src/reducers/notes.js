import { combineReducers, createStore } from 'redux';
import { uuidv4 } from 'uuid';

const demoState = {
    notes: [{
        id : 'dsfdsf',
        title: 'abcd',
        author: 'asdasd',
        isbn: 'sdfdsfdf',
        text: 'esdfdf'
    }],
    filters: {
        author: 'dsfsdf',
        title: 'asdas'
    }
};

const notesReducerDefaultState = [];

const notesReducer = (state = notesReducerDefaultState, action) => {
    switch (action.type) {
        // case value:
        //     break;
    
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    author: '',
    title: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    notes: notesReducer,
    filters: filtersReducer
}));