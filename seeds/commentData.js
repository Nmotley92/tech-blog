const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Great post',
        comment_date: new Date(),
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'I agree',
        comment_date: new Date(),
        user_id: 2,
        post_id: 1
    },
    // ...
];

const seedComments = async () => {
    for (let i = 0; i < 25; i++) {
        await Comment.create({
            comment_text: `Comment ${i+1}`,
            comment_date: new Date(),
            user_id: i+1,
            post_id: i+1
        });
    }
};

module.exports = seedComments;