const filterByTitle = (notes, { author, title }) => {
    return notes.filter(note => {
        return note.title === title;
    });
};

export default filterByTitle;