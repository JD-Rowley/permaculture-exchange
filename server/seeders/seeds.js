const faker = require('faker')

const db = require('../config/connection')
const { User } = require('../models')

db.once('open', async () => {
    await User.deleteMany({})

    //create user data
    const userData = [];

    for (let i = 30; i < 30; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();
        console.log(username)

        userData.push({ username, email, password })
    }

    console.log('all done!')
    process.exit(0)
})