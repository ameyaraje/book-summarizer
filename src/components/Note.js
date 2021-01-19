import React from 'react';

const Note = ({ title, author, isbn, text }) => {
    return (
        <div>
            <ul>
                <li>{title}</li>
                <li>{author}</li>
                <li>{isbn}</li>
                <li>{text}</li>
            </ul>
        </div>
    );
};

export default Note;