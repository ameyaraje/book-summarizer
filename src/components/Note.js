import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../actions/notes';

const Note = ({ id, title, author, isbn, text, dispatch }) => {
    return (
        <div>
            <ul>
                <li>{title}</li>
                <li>{author}</li>
                <li>{isbn}</li>
                <li>{text}</li>
            </ul>
            <button onClick={() => {
                dispatch(removeNote({ id }))
            }}>
                Remove Note
            </button>
        </div>
    );
};

export default connect()(Note);