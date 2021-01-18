const filterByAuthor = (notes, { author, title }) => {
    return notes.filter(note => {
        return note.author === author;
    });
};

export default filterByAuthor;
