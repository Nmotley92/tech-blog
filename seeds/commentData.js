const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Great post',
        comment_date: new Date(),
        commented_by: 'testuser1',
        post_id: 1
    },
    {
        comment_text: 'I agree',
        comment_date: new Date(),
        commented_by: 'admin',
        post_id: 1
    },
    // ...
];

const seedComments = async () => {
    for (let i = 0; i < 25; i++) {
        await Comment.create({
            comment_text: `Comment ${i+1}`,
            comment_date: new Date(),
            commented_by: 'admin',
            post_id: 1
        });
    }
};

module.exports = seedComments;