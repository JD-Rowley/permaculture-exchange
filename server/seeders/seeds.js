const faker = require('faker')

const db = require('../config/connection')
const { User, Post } = require('../models')

db.once('open', async () => {
    await User.deleteMany({})
    await Post.deleteMany({})

    //create user data
    const userData = [];

    for (let i = 0; i < 30; i++) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password })
    }

    const createdUsers = await User.collection.insertMany(userData)

    //create posts
    const createdPosts = [];
    for (let i = 0; i < 150; i++) {

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

    console.log('all done!')
    process.exit(0)
})