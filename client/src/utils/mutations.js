import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($postTitle: String!, $postDescription: String!) {
        addPost(postTitle: $postTitle, postDescription: $postDescription) {
            _id
            postTitle
            postDescription
            createdAt
            username
            comments {
                _id
            }
        }
    }
`;

export const ADD_COMMENT = gql `
    mutation addComment($postId: ID!, $commentText: String!) {
        addComment(postId: $postId, commentText: $commentText) {
            _id
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;

export const DELETE_POST = gql `
    mutation deletePost ($id: ID!) {
        deletePost (_id: $id) {
            _id
            postTitle
            username
            createdAt
        }
    }
`;

export const DELETE_COMMENT = gql `
    mutation deleteComment ($postId: ID!, $commentId: ID!) {
        deleteComment (postId: $postId, commentId: $commentId) {
            _id
            postTitle
            comments {
                _id
                commentText
            }
        }
    }
`;