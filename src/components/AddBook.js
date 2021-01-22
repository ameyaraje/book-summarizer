import React from 'react';
import Header from './Header';
import NoteForm from './NoteForm';
import { addNote } from '../actions/notes';
import {connect} from 'react-redux';

const AddBook = (props) => {
    return (
        <div>
            <Header />
            <h1>
                Add New Book
            </h1>
            <NoteForm onSubmit={(note) => {
                // console.log(note);
                props.dispatch(addNote(note));
                props.history.push('/dashboard');
            }} />
        </div>
    );
};

export default connect()(AddBook);