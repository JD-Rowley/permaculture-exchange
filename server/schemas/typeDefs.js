// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
<<<<<<< HEAD
  
  type Query {
    helloWorld: String
  }
=======

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

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postTitle: String!, postDescription: String!): Post
        addComment(postId: ID!, commentText: String!): Post
        deletePost(_id: ID!): Post
        deleteComment(postId: ID!, commentId: ID!): Post
    }
>>>>>>> develop
`;

// export the typeDefs
module.exports = typeDefs;