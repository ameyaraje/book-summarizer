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