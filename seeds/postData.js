const { User, Post } = require('../models');

const posts = [
    {
        title: 'Post 1',
        content: 'This is the first post',
        // random date
        post_date: new Date(),
        posted_by: 'johndoe',
    },
    {
        title: 'Post 2',
        content: 'This is the second post',
        // random date
        post_date: new Date(),
        posted_by: 'johndoe',
    },
    {
        title: 'Post 3',
        content: 'This is the third post',
        // random date
        post_date: new Date(),
        posted_by: 'johndoe2',
    },
    {
        title: 'Post 4',
        content: 'This is the fourth post',
        // random date
        post_date: new Date(),
        posted_by: 'johndoe2',
    },
    {
        title: 'Post 5',
        content: 'This is the fifth post',
        // random date
        post_date: new Date(),
        posted_by: 'johndoe2',
    },
    {
        title: 'Post 6',
        content: 'This is the sixth post',
        // random date
        post_date: new Date(),
        posted_by: 'johndoe2',
    },
    {
        title: 'Post 7',
        content: 'This is the seventh post',
        // random date
        post_date: new Date(),
        posted_by: 'janedoe2',
    },
    {
        title: 'Post 8',
        content: 'This is the eighth post',
        // random date
        post_date: new Date(),
        posted_by: 'janedoe2',
    }
];

const seedPosts = () => posts.bulkCreate(posts);

module.exports = seedPosts;