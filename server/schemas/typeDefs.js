// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        posts: [Post]
    }

    type Post {
        _id: ID
        postTitle: String
        postDescription: String
        createdAt: String
        username: String
        comments: [Comment]
        file: [File]
    }

    type Comment {
        _id: ID
        commentText: String
        username: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type File {
        filename: String
        mimetype: String
        encoding: String
        url: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
        uploads: [File]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postTitle: String!, postDescription: String!): Post
        addComment(postId: ID!, commentText: String!): Post
        singleUpload(file: Upload!): File!
        uploadFile(file: Upload!): File!
    }
`;

// export the typeDefs
module.exports = typeDefs;