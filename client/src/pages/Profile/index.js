import React from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import TradeList from '../../components/TradeList';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries'
import Auth from '../../utils/auth';
import './style.css';

function Profile() {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (!user?.username) {
        return (
            <h4>You need to be logged in to see this page! <Link to="/login">Click here</Link> or use the navigation links above to login!</h4>
        )
    }

    return (
        <div className='profile'>
            <h2>{userParam ? `${user.username}'s` : 'Your'} profile.</h2>
            <div>
                <TradeList posts={user.posts} title={`${user.username}'s posts:`} />
            </div>
        </div>
    );
};

export default Profile;