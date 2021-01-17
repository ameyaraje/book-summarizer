import { combineReducers, createStore } from 'redux';
import uuid from 'uuid';

const demoState = {
    notes: [{
        id: 'dsfdsf',
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

/*
    actions needed:
    add note
    edit note
    remove note
    get note
    get all notes

    filter by author
    filter by title
*/

const addNote = ({
    title = '',
    author = '',
    isbn = '',
    text = ''
} = {}) => {
    return {
        type: 'ADD_NOTE',
        note: {
            id: uuid(),
            title,
            author,
            isbn,
            text
        }
    };
};

const removeNote = ({ id } = {}) => {
    return {
        type: 'REMOVE_NOTE',
        id: id
    };
};

const editNote = (id, updates) => {
    return {
        type: 'EDIT_NOTE',
        id: id,
        updates: updates
    };
};

const setNotes = (notes) => {
    return {
        type: 'SET_NOTES',
        notes: notes
    };
};

const notesReducerDefaultState = [];

const notesReducer = (state = notesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                action.note
            ];

        case 'REMOVE_NOTE':
            return state.filter(({ id }) => {
                return id !== action.id
            });

        case 'EDIT_NOTE':
            return state.map((note) => {
                if (note.id === action.id)
                    return {
                        ...note,
                        ...action.updates
                    };
                else
                    return note;
            });

        case 'SET_NOTES':
            return action.notes;

        default:
            return state;
    }
};


const searchByAuthor = (text = '') => {
    return {
        type: 'SEARCH_BY_AUTHOR',
        text: text
    };
};

const searchByTitle = (text = '') => {
    return {
        type: 'SEARCH_BY_TITLE',
        text: text
    };
};

const filtersReducerDefaultState = {
    author: '',
    title: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SEARCH_BY_AUTHOR':
            return {
                ...state,
                text: action.text
            };

        case 'SEARCH_BY_TITLE':
            return {
                ...state,
                text: action.text
            };

        default:
            return state;
    }
};

const store = createStore(combineReducers({
    notes: notesReducer,
    filters: filtersReducer
}));