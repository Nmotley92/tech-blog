const { User, Post } = require('../models');

const posts = [
  {
    title: 'First Post',
    content: 'This is my first post',
    post_date: new Date(),
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'This is my second post',
    post_date: new Date(),
    user_id: 2,
  },
  {
    title: 'Third Post',
    content: 'This is my third post',
    post_date: new Date(),
    user_id: 3,
  },
];