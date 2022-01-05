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

export const UPLOAD_FILE = gql `
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`