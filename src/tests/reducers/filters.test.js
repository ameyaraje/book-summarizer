import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        author: '',
        title: ''
    });
});

test('should set to search by author', () => {
    const action = {
        type: 'SEARCH_BY_AUTHOR',
        author: 'Ganpat Patil'
    };
    const state = filtersReducer(undefined, action);
    expect(state.author).toBe('Ganpat Patil');
});

test('should set to search by title', () => {
    const action = {
        type: 'SEARCH_BY_TITLE',
        title: 'Dreamchaser'
    };
    const state = filtersReducer(undefined, action);
    expect(state.title).toBe('Dreamchaser');
});