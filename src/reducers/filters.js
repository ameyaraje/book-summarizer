const filtersReducerDefaultState = {
    author: '',
    title: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SEARCH_BY_AUTHOR':
            return {
                ...state,
                author: action.author
            };

        case 'SEARCH_BY_TITLE':
            return {
                ...state,
                title: action.title
            };

        default:
            return state;
    }
};

export default filtersReducer;