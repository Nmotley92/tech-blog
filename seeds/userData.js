const {user}= require('../models');

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
    }

]

const seedUsers = () => userData.bulkCreate(userData);


module.exports = seedUsers;