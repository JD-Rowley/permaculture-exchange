const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello WOrlds';
        }
    }
};

module.exports = resolvers;