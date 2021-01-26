import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                Remove Book
            </button>
            <button>
                <Link to={`/edit/${id}`}>
                    Edit Book
                </Link>
            </button>
        </div>
    );
};

export default connect()(Note);