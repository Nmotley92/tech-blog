const { Post } = require('../models');

const postData = [
    {
        title: 'My first post',
        content: 'This is the content of my first post',
        post_date: new Date(),
        posted_by: 'testuser1',
        
    },
    {
        title: 'My second post',
        content: 'This is the content of my second post',
        post_date: new Date(),
        posted_by: 'admin',

        
    },
    // ...
];

const seedPosts = async () => {
    for (let i = 0; i < 25; i++) {
        await Post.create({
            title: `Post ${i+1}`,
            content: 'This is the content of post',
            post_date: new Date(),
            posted_by: 'admin',
            
        });
    }
};

module.exports = seedPosts;