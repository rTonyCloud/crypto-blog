const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "hello world!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Greatt!!!!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "you're fired.!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We hate this assignment!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "we love this assignment!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "please kill me!"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "wow!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;


