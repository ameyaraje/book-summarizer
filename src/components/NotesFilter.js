import React from 'react';
import { connect } from 'react-redux';

const NotesFilter = (props) => {
    return (
        <div>
            <h5>Notes Filter</h5>
            <input type="text"/>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(NotesFilter);