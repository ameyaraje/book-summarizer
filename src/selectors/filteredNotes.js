const filteredNotes = (notes, { author, title }) => {

    if (author) author = author.toLowerCase();
    if (title) title = title.toLowerCase();
    
    if (author && !title) {
        return notes.filter(note => {
            return note.author.toLowerCase().includes(author);
        });
    } else if (!author && title) {
        return notes.filter(note => {
            return note.title.toLowerCase().includes(title);
        });
    } else if (author && title) {
        return notes.filter(note => {
            return note.title.toLowerCase().includes(title) && note.author.toLowerCase().includes(author);
        });
    } else {
        return notes;
    }
};

export default filteredNotes;
