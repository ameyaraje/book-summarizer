import { v4 as uuidv4 } from 'uuid';

export const addNote = ({
    title = '',
    author = '',
    isbn = '',
    text = ''
} = {}) => {
    return {
        type: 'ADD_NOTE',
        note: {
            id: uuidv4(),
            title,
            author,
            isbn,
            text
        }
    };
};

export const removeNote = ({ id } = {}) => {
    return {
        type: 'REMOVE_NOTE',
        id: id
    };
};

export const editNote = (id, updates) => {
    return {
        type: 'EDIT_NOTE',
        id: id,
        updates: updates
    };
};

export const setNotes = (notes) => {
    return {
        type: 'SET_NOTES',
        notes: notes
    };
};