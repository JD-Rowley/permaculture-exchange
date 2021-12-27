import React from 'react';
import Post from '../../components/TradePost';
import './style.css';

function Dashboard() {
    return (
        <div className='dashboard'>
            <h1>Welcome, Name!</h1>
            <div>
                <h2>Your posts:</h2>
                <Post />
            </div>
        </div>
    );
}

export default Dashboard;