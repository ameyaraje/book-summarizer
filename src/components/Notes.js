import React from 'react';
import { connect } from 'react-redux';
import filteredNotes from '../selectors/filteredNotes';
import Note from './Note';

const Notes = (props) => {
    return (
        <div>
            <h3>
                Notes Component
            </h3>
            <p>
                {props.notes.length}
            </p>
            {
                props.notes.map((note) => {
                    return (
                        <Note key={note.id} {...note} />
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        notes: filteredNotes(state.notes, state.filters)
    };
};

export default connect(mapStateToProps)(Notes);