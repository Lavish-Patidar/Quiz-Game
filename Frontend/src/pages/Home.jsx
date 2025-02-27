import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Quiz Game!</h1>
            <p>Test your knowledge and have fun!</p>
            <p>Click the button below to start the quiz and see how much you know!</p>
            <Link to='/quiz'><button>Start</button></Link>
        </div>
    );
};

export default Home;
