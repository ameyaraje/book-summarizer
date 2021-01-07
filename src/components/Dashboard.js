import React from 'react';
import Header from './Header';

const Dashboard = (props) => {
    console.log(props);

    return (
        <div>
            <Header />
            <h1>
                Dashboard
            </h1>
        </div>
    );
};

export default Dashboard;