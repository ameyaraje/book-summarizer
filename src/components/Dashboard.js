import React from 'react';
import Header from './Header';
import Notes from './Notes';

const Dashboard = (props) => {
    console.log(props);

    return (
        <div>
            <Header />
            <h1>
                Dashboard
            </h1>
            <Notes />
        </div>
    );
};

export default Dashboard;