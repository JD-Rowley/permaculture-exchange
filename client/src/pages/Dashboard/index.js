import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Post from '../../components/TradePost';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries'
import './style.css';

function Dashboard() {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user?.username) {
        <div>
            You need to be logged in to see this page! Use the navigation links above to login or sign up!
        </div>
    }

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