import React from 'react';
import { editNote } from '../actions/notes';
import Header from './Header';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';

const EditBook = (props) => {
    // console.log('EB', props);

    const onBookEdited = (book) => {
        // console.log("Edited Book is", book);
        props.dispatch(editNote(props.notes.id ,book));
        props.history.push('/dashboard');
    };

    return (
        <div>
            <Header />
            <h5>Edit Book</h5>
            <NoteForm onSubmit={onBookEdited} book={props.notes} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        notes: state.notes.find(note => note.id === ownProps.match.params.id)
    };
};

export default connect(mapStateToProps)(EditBook);