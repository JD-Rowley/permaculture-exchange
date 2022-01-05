const { User, Post, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const path = require('path')
const fs = require('fs')

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
            return Post.find(params)
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id })
        },
/*         files: () => {
           //return the record of files uploaded from your DB or API or filesystem
        } */
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

                return post
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
        uploadFile: async (parent, { file }) => {
            const { createReadStream, filename, mimetype, encoding } = await file;

            console.log(filename)
            const stream = fs.createReadStream()
            const pathName = path.join(__dirname, `../public/images/${filename}`)
            await stream.pipe(fs.createWriteStream(pathName))

            return {
                url: `http://localhost:3001/images/${filename}`,
            }
        }
    }
};

module.exports = resolvers;