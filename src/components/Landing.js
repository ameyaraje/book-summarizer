import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Landing = () => {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Book Summarizer</h1>
                    <p className="lead">A glorified notes app. </p>
                </div>
            </div>
            <div className="container">
                <p>I'm learning ReactJS and have been saving notes when I read books using MS Word. This is an application to learn ReactJS while making something I would value.</p>
            </div>
        </div>
    );
};

export default Landing;