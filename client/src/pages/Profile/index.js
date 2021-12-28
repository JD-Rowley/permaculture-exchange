import React from 'react';
import { useParams } from 'react-router-dom';
import TradeList from '../../components/TradeList';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries'
import './style.css';

function Profile() {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className='profile'>
            <h2>Viewing {user.username}'s profile.</h2>
            <div>
                <TradeList posts={user.posts} title={`${user.username}'s posts:`} />
            </div>
        </div>
    );
};

export default Profile;