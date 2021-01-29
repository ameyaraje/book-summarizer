import filteredNotes from '../../selectors/filteredNotes';
import notes from '../fixtures/notes';

test('should filter by author name', () => {
    const filters = {
        author: 'Steven'
    };

    const values = filteredNotes(notes, filters);
    expect(values).toEqual([notes[0], notes[1]]);
});

test('should filter by title name', () => {
    const filters = {
        title: 'Freak'
    };

    const values = filteredNotes(notes, filters);
    expect(values).toEqual([notes[0], notes[1]]);
});

test('should filter by title and author name with provided values -1', () => {
    const filters = {
        author: 'rarna',
        title: 'asd'
    };

    const values = filteredNotes(notes, filters);
    expect(values).toEqual([]);
});

test('should filter by title and author name with provided values -2', () => {
    const filters = {
        author: 'rarna',
        title: 'dential'
    };

    const values = filteredNotes(notes, filters);
    expect(values).toEqual([notes[3]]);
});

test('should filter by title and author name with empty values', () => {
    const filters = {
        author: '',
        title: ''
    };

    const values = filteredNotes(notes, filters);
    expect(values).toEqual(notes);
});