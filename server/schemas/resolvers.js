const { User, Post, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { post } = require('../models/Comment');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts')
                
                return userData
            }
        },
        users: async () => {
            return User.find()
                //.select('-__v -password')
                .populate('posts')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('posts')
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 })
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id }).sort({ createdAt: -1 })
        }
    },
    Mutation: {
        addUser: async(parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user }
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(password)

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user)

            return { token, user }
        },
        addPost: async(parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: post._id }},
                    { new: true }
                )

                return post;
            }

            throw new AuthenticationError('You need to be logged in!')
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
              const updatedPost = await Post.findOneAndUpdate(
                { _id: postId },
                { $push: { comments: { commentText, username: context.user.username } } },
                { new: true, runValidators: true }
              );
      
              return updatedPost;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
        deletePost: async (parent, { _id }, context) => {
            if (context.user) {
                const deletedPost = await Post.findOneAndRemove(
                    { _id },
                    { new: true }
                );
    
                return deletedPost;
            }
        },
        deleteComment: async (parent, { postId, commentId }, context) => {
            if (context.user) {
                const deletedComment = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $pull: { comments: { _id: commentId }}},
                    { new: true }
                );
            }

            return deletedComment;
        }
    }
};

module.exports = resolvers;