import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations'; 

function CommentForm({ postId }) {
    const [commentText, setText] = useState('');
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    function handleChange(e) {
        setText(e.target.value);
    };

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            await addComment({
            variables: { commentText, postId }
            });

            setText('');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h3>Leave a comment:</h3>
            {error && <div>Something went wrong...</div>}
            <form onSubmit={handleFormSubmit}>
                <textarea
                    placeholder='Do you have a response?'
                    name='commentText'
                    value={commentText}
                    onChange={handleChange}
                ></textarea>
                <button type='submit' className='btn'>
                    Submit
                </button>
            </form>
        </div>
    )
};

export default CommentForm;