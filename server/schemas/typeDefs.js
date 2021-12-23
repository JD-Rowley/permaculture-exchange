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
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
    }
`;

// export the typeDefs
module.exports = typeDefs;