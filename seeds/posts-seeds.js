const { Post } = require('../models');

const postData = [
    {
        title: "I almost completed my assignment!",
        post_content: "It's almost finished!.",
        user_id: 2,
        post_url:""
    },
    {
        title: "Bought a new car!",
        post_content: "my new car broke down 5min after buying it.",
        user_id: 3,
        post_url:""
    },
    {
        title: "I got married!",
        post_content: "Please pray for me!",
        user_id: 1,
        post_url:""

    },
    {
        title: "I am the best programmer ever!",
        post_content: "I did an online coding bootcamp and now I am the best programmer in the world!",
        user_id: 4,
        post_url:""
    },
    {
        title: "I lost my dog!",
        post_content: "if anyone sees my dog please don't bother returning it. you can keep him!",
        user_id: 5,
        post_url:""
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;