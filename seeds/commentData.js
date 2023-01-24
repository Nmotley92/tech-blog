
const { User, Post, Comment } = require('../models');


const comments = [
    {
        comment_text: 'This is the first comment',
        // random date
        comment_date: new Date(),
        auther: 'johndoe',
        post_id: 1,
    },
    {
        comment_text: 'This is the second comment',
        // random date
        comment_date: new Date(),
        auther: 'johndoe',
        post_id: 1,
    },
    {
        comment_text: 'This is the third comment',
        // random date
        comment_date: new Date(),
        auther: 'johndoe2',
        post_id: 2,
    },
    {
        comment_text: 'This is the fourth comment',
        // random date
        comment_date: new Date(),
        auther: 'johndoe2',
        post_id: 2,
    },
    {
        comment_text: 'This is the fifth comment',
        // random date
        comment_date: new Date(),
        auther: 'johndoe2',
        post_id: 3,
    },
    {
        comment_text: 'This is the sixth comment',
        // random date
        comment_date: new Date(),
        auther: 'johndoe2',
        post_id: 3,
    } 
];


const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;

