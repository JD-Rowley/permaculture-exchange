const faker = require('faker')

const db = require('../config/connection')
const { User, Post, Comment } = require('../models')

db.once('open', async () => {
    await User.deleteMany({})
    await Post.deleteMany({})

    //create user data
    const userData = [];

    for (let i = 0; i < 15; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password })
    }

    const createdUsers = await User.collection.insertMany(userData)

    //create posts
    const createdPosts = [];
    for (let i = 0; i < 40; i++) {

        const postTitle = faker.commerce.productName();
        const postDescription = faker.lorem.words(Math.round(Math.random() * 20) + 1)

        const randomUserIndex = Math.floor(Math.random() * userData.length);
        const username = userData[randomUserIndex].username
        const userId = userData[randomUserIndex]._id

        const createdPost = await Post.create({ postTitle, postDescription, username })

        const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { posts: createdPost._id }}
        )

        createdPosts.push(createdPost)
    }

    for (let i = 0; i < 300; i++) {
        const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1)

        const randomUserIndex = Math.floor(Math.random() * userData.length);
        const username = userData[randomUserIndex].username

        const randomPostIndex = Math.floor(Math.random() * createdPosts.length)
        const postId = createdPosts[randomPostIndex]._id

        //const createdComment = await Comment.create({ commentText, username })

/*         const updatedUser = await User.updateOne(
            { _id: userId },
            { $push: { userComments: createdComment._id }}
        ) */

        await Post.updateOne(
            { _id: postId },
            { $push: { comments: { commentText, username }}},
            { runValidators: true }
        )
    }

    console.log('all done!')
    process.exit(0)
})