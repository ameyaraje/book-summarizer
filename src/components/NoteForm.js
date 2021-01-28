import React, { useEffect, useState } from 'react';

const NoteForm = (props) => {
    // console.log(props);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [bookText, setBookText] = useState('');
    const [error, setError] = useState({
        state: false,
        message: ''
    });

    useEffect(() => {
        if (props.book) {
            setTitle(props.book.title);
            setAuthor(props.book.author);
            setBookText(props.book.text);
            setIsbn(props.book.isbn);
        }
    }, [props.book]);

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
            setError({
                state: true,
                message: 'Please fill out the missing fields'
            });
        // } else if (!isbn.match(`^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$`)) {
        //     setError({
        //         state: true,
        //         message: 'Please verify the ISBN entered'
        //     });
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
                error.state && <h4>{error.message}</h4>
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