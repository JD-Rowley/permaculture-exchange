import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';

function PostForm() {
    const [formState, setFormState] = useState({ postTitle: '', postDescription: '' })
    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e);
            }

            const { me } = cache.readQuery({ query: QUERY_ME });

            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } }
            });
        }
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            await addPost({
                variables: { ...formState }
            });

            setFormState({
                postTitle: '',
                postDescription: ''
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h3>Create A Trade Post</h3>
            {error && <div>Something went wrong...</div>}
            <form className='post-form'
                onSubmit={handleFormSubmit}>
                <input 
                    type='text' 
                    placeholder='What will you call this post?'
                    name='postTitle'
                    className='post-title'
                    id='title'
                    value={formState.postTitle}
                    onChange={handleChange}
                />
                <textarea 
                    placeholder='Are you looking to trade?'
                    name='postDescription'
                    className='post-description'
                    value={formState.postDescription}
                    onChange={handleChange}
                ></textarea>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default PostForm;