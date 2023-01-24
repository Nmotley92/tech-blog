const { User } = require('../models');

const userData = [
    {
        username: 'johndoe',
        email: 'jojo@gmail.com',
        password: 'password123'
    },
    {
        username: 'janedoe',
        email: 'janedoe@gmail.com',
        password: 'password123'
    },
    {
        username: 'johndoe2',
        email: 'johndoe2@gmail.com',
        password: 'password123'
    },
    {
        username: 'janedoe2',
        email: 'janedoe2@gmail.com',
        password: 'password123'
    },
    {
        username: 'johndoe3',
        email: 'johndoe3@gmail.com',
        password: 'password123'
    },
    {
        username: 'janedoe3',
        email: 'janedoe3@gmail.com',
        password: 'password123'
    },
    {
        username: 'johndoe4',
        email: 'johndoe4@gmail.com',  
        password: 'password123'
    },
    {
        username: 'janedoe4',
        email: 'jandoe4@gmail.com',
        password: 'password123'
    },
    {
        username: 'johndoe5',
        email: 'johndoe5@gmail.com',
        password: 'password123'
    },
    {
        username: 'janedoe5',
        email: 'janedoe5@gmail.com',
        password: 'password123'
    },
    {
        username: 'user6',
        email: 'user6@gmail.com',
        password: 'password123'
    },
    {
        username: 'user7',
        email: 'user7@gmail.com',
        password: 'password123'
    },
    {
        username: 'user8',
        email: 'user8@gmail.com',
        password: 'password123'
    },
    {
        username: 'user9',
        email: 'user9@gmail.com',
        password: 'password123'
    },
    {
        username: 'user10',
        email: 'user10@gmail.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers;