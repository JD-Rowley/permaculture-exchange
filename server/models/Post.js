const { Schema, model } = require('mongoose')
const commentSchema = require('./Comment')
const fileSchema = require('./File')
const dateFormat = require('../utils/dateFormat')

const postSchema = new Schema(
    {
        postTitle: {
            type: String,
            required: 'You need to leave a title!',
            minlength: 1,
            maxlength: 40
        },
        postDescription: {
            type: String,
            required: 'Please leave a description',
            minlength: 1,
            maxlength: 350
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema],
        files: [fileSchema]
    }
)

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Post = model('Post', postSchema)

module.exports = Post