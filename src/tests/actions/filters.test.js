import { searchByAuthor, searchByTitle } from '../../actions/filters';

test('should test filter by author action generator object for provided value', () => {
    const author = 'Dale Carnegie';
    const action = searchByAuthor(author);

    expect(action).toEqual({
        type: 'SEARCH_BY_AUTHOR',
        author: author
    });
});

test('should test filter by title action generator object for provided value', () => {
    const title = 'A Promised Land';
    const action = searchByTitle(title);

    expect(action).toEqual({
        type: 'SEARCH_BY_TITLE',
        title: title
    });
});

test('should test filter by author action generator object for empty value', () => {
    const action = searchByAuthor();

    expect(action).toEqual({
        type: 'SEARCH_BY_AUTHOR',
        author: ''
    });
});

test('should test filter by title action generator object for empty value', () => {
    const action = searchByTitle();

    expect(action).toEqual({
        type: 'SEARCH_BY_TITLE',
        title: ''
    });
});