import filteredNotes from '../../selectors/filteredNotes';

const notes = [
    {
        id: 'dfg6dg2',
        title: 'Freakonomics',
        author: 'Steven Dubner',
        isbn: 'd89fgdfg',
        text: 'blah blah blah'
    },
    {
        id: '123abcd',
        title: 'Freakonomics v2.0',
        author: 'Steven Dubner',
        isbn: 'kn89879',
        text: 'blah blah blah v2'
    },
    {
        id: '765kjfg',
        title: 'My Turn',
        author: 'Johan Cryuff',
        isbn: 'd8fgdfg',
        text: 'total football related nonsense'
    },
    {
        id: 'hdfg7dfg',
        title: 'Pep Confidential',
        author: 'Marti Perarnau',
        isbn: 'asdasd',
        text: 'bayern tactics and all'
    }
];

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