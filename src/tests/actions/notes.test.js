import { addNote, removeNote, editNote } from '../../actions/notes';

test('should set up remove note action object', () => {
    const action = removeNote({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_NOTE',
        id: '123abc'
    });
});

test('should set up edit note action object', () => {
    const action = editNote('123abc', { text: 'blah blah' });
    expect(action).toEqual({
        type: 'EDIT_NOTE',
        id: '123abc',
        updates: {
            text: 'blah blah'
        }
    });
});

test('should set up action expense object with provided values', () => {
    const book = {
        title: 'test',
        author: 'someone',
        isbn: 'asdasd',
        text: 'blah blah blah'
    };

    const action = addNote(book);

    expect(action).toEqual({
        type: 'ADD_NOTE',
        note: {
            id: expect.any(String),
            title: 'test',
            author: 'someone',
            isbn: 'asdasd',
            text: 'blah blah blah'
        }
    });
});

test('should set up action expense object with empty values', () => {
    const book = {
        title: '',
        author: '',
        isbn: '',
        text: ''
    };
    const action = addNote(book);

    expect(action).toEqual({
        type: 'ADD_NOTE',
        note: {
            id: expect.any(String),
            title: '',
            author: '',
            isbn: '',
            text: ''
        }
    });
});