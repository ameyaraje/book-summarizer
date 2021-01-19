const filteredNotes = (notes, { author, title }) => {

    // TODO: Should not expect exact matches (lower-cases; partial matches; etc)
    if (author && !title) {
        return notes.filter(note => {
            return note.author === author;
        });
    } else if (!author && title) {
        return notes.filter(note => {
            return note.title === title;
        });
    } else if (author && title) {
        return notes.filter(note => {
            return note.title === title && note.author === author;
        });
    }
};

export default filteredNotes;
