const chance = require('chance').Chance();
const { User } = require('../models');
const bcrypt = require('bcrypt');

const seedUsers = async () => {
    let users = [
        {
            username: 'admin',
            email: 'admin@localhost.com',
            password: 'password'
        },
        {
            username: 'testuser1',
            email: 'testuser1@localhost.com',
            password: 'password'
        },

    ];
    users[0].password = await bcrypt.hash(users[0].password, 10);
    users[1].password = await bcrypt.hash(users[1].password, 10);
    
    



    for (let i = 0; i < 100; i++) {
        let user = {
            username: chance.first() + chance.integer({ min: 0, max: 999 }),
            email: chance.email(),
            password: chance.string({ length: 8 })
        };
        user.password = await bcrypt.hash(user.password, 10);
        
        users.push(user);
    }
    
    await User.bulkCreate(users);
  console.log(users);  
};

module.exports = seedUsers;
