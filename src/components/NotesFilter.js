import React from 'react';
import { connect } from 'react-redux';
import { searchByAuthor, searchByTitle } from '../actions/filters';

const NotesFilter = (props) => {
    return (
        <div>
            <h5>Notes Filter</h5>
            <input
                type="text"
                value={props.filters.author}
                placeholder="Search By Author"
                onChange={e => {
                    props.dispatch(searchByAuthor(e.target.value));
                }}
            />
            <input
                type="text"
                value={props.filters.title}
                placeholder="Search By Book Title"
                onChange={e => {
                    props.dispatch(searchByTitle(e.target.value));
                }}
            />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(NotesFilter);