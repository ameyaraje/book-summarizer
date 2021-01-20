import React, { useState } from 'react';

const NoteForm = (props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [bookText, setBookText] = useState('');
    const [error, setError] = useState(false);

    const onAuthorChanged = (e) => {
        setAuthor(e.target.value);
    };

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    };

    const onIsbnChanged = (e) => {
        setIsbn(e.target.value);
    };

    const onBookTextChanged = (e) => {
        setBookText(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (title === '' || author === '' || isbn === '') {
            setError(true);
        } else {
            props.onSubmit({
                author: author,
                title: title,
                isbn: isbn,
                text: bookText,
            });
        }
    };

    return (
        <div>
            <h3>
                Note Form
            </h3>
            {
                error && <p>Please fill out all the fields</p>
            }
            <form>
                <input type="text" placeholder="Author" autoFocus value={author} onChange={onAuthorChanged} />
                <input type="text" placeholder="Title" value={title} onChange={onTitleChanged} />
                <input type="text" placeholder="ISBN" value={isbn} onChange={onIsbnChanged} />
                <textarea cols="30" rows="10" placeholder="Enter Book Notes" value={bookText} onChange={onBookTextChanged}></textarea>
                <button onClick={onFormSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default NoteForm;