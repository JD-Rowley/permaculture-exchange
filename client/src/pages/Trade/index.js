import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import TradeList from '../../components/TradeList';
import './style.css';

function Trade() {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];

    return (
        <div className='container'>
            <div className='card-container'>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <TradeList posts={posts} title='This is the trade page!' />
                )}
            </div>
        </div>
    );
}

export default Trade;