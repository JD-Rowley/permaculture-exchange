import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            posts {
                _id
                postTitle
                postDescription
                createdAt
                username
                comments {
                    commentBody
                    username
                    createdAt
                }
            }
        }
    }
`

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            posts {
                _id
                postTitle
                postDescription
                createdAt
                username
                comments {
                    commentBody
                    username
                    createdAt
                }
            }
        }
    }
`

export const QUERY_POSTS = gql`
    query posts($username: String) {
        posts(username: $username) {
            _id
            postTitle
            postDescription
            createdAt
            username
        }
    }
`

export const QUERY_POST = gql`
    query post($id: ID!) {
        post(_id: $id) {
            _id
            postTitle
            postDescription
            createdAt
            username
            comments {
                commentText
                username
                createdAt
            }
        }
    }
`