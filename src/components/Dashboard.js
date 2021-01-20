import React from 'react';
import Header from './Header';
import Notes from './Notes';
import NotesFilter from './NotesFilter';

const Dashboard = (props) => {
    // console.log(props);

    return (
        <div>
            <Header />
            <h1>Dashboard</h1>
            <NotesFilter />
            <Notes />
        </div>
    );
};

export default Dashboard;