import notesReducer from '../../reducers/notes';
import { uuid } from 'uuid';
import notes from '../fixtures/notes';

test('should set up default filter values', () => {
    const state = notesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove note by id', () => {
    const action = {
        type: 'REMOVE_NOTE',
        id: notes[1].id
    };
    const state = notesReducer(notes, action);

    expect(state).toEqual([notes[0], notes[2], notes[3]]);
});

test('should not remove note if an invalid id is entered', () => {
    const action = {
        type: 'REMOVE_NOTE',
        id: '2367hbd'
    };
    const state = notesReducer(notes, action);

    expect(state).toEqual(notes);
});

test('should add an expense', () => {
    const newNote = {
        id: '908dfg',
        title: 'abcd',
        author: 'asdasd',
        isbn: 'sdfdsfdf',
        text: 'esdfdf'
    };

    const action = {
        type: 'ADD_NOTE',
        note: newNote
    };

    const state = notesReducer(notes, action);

    expect(state).toEqual([...notes, newNote]);
});

test('should edit a note if valid id is provided', () => {
    const newText = 'some new text here';
    const action = {
        type: 'EDIT_NOTE',
        id: notes[2].id,
        updates: {
            text: newText
        }
    };
    const state = notesReducer(notes, action);

    expect(state[2].text).toBe(newText);
});

test('should not edit a note if valid id is not provided', () => {
    const newText = 'some new text here';
    const action = {
        type: 'EDIT_NOTE',
        id: '986dsfjdf',
        updates: {
            text: newText
        }
    };
    const state = notesReducer(notes, action);

    expect(state).toEqual(notes);
});