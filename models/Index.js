// import models
const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// user have many Post
User.hasMany(Post, {
foreignKey: 'user_id'

});

// Post belongs to users
Post.belongsTo(User, {
  foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// Comment belongsTo User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// User have many Products
User.hasMany(Comment, {
    foreignKey: 'user_id'
});


// POst hasMany comments (through ProductTag)
Post.hasMany(Comment, { 
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
    onDelete: 'SET NULL'
})

module.exports = {
  Comment,
  Post,
  User
};
