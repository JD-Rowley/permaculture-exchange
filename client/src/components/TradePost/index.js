import React from 'react';
import './style.css';

function TradePost() {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <p>
                    <a href=''><b>This is a trade card!</b></a>
                    <span>Posted by: JD on Dec. 27, 2021</span>
                </p>
            </div>
            <div className='card-body'>
                <div>
                    <img src="https://plchldr.co/i/250x250" alt="plchldr.co" />
                    <p>Anyone want to borrow this thing?</p>
                </div>
            </div>
        </div>
    );
}

export default TradePost;