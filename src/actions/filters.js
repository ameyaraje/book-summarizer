export const searchByAuthor = (author = '') => {
    return {
        type: 'SEARCH_BY_AUTHOR',
        author
    };
};

export const searchByTitle = (title = '') => {
    return {
        type: 'SEARCH_BY_TITLE',
        title
    };
};