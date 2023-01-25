const chance = require('chance').Chance();
const { User } = require('../models');

const seedUsers = async () => {
    let users = [
        {
            username: 'admin',
            email: 'admin@localhost',
            password: 'password'
        },
        {
            username: 'testuser1',
            email: 'testuser1@localhost',
            password: 'password'
        },

    ];

    for (let i = 0; i < 100; i++) {
        let user = {
            username: chance.first() + chance.integer({ min: 0, max: 999 }),
            email: chance.email(),
            password: chance.string({ length: 8 })
        };
        users.push(user);
    }
    await User.bulkCreate(users);
};

module.exports = seedUsers;
