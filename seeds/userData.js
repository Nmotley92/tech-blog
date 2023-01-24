Copy code
const faker = require('faker');
const { User } = require('../models');

const users = [];

for (let i = 0; i < 25; i++) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
}

const seedUsers = async () => {
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    await User.findOrCreate({
      where: {
        email: user.email
      },
      defaults: user
    });
  }
}

module.exports = seedUsers;