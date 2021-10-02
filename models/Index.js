// import models
const Comment = require('./Post');
const Post = require('./Comment');
const User = require('./User');



// need to be completed
// Products belongsTo Category
todo.belongsTo(todo, {
foreignKey: 'todo'
});
// Categories have many Products
todo.hasMany(todo, {
  foreignKey: 'todo'
});

// Product belongTo User
todo.belongsTo(User, {
    foreignKey: 'user_id',
});

// User have many Products
tdo.hasMany( todo, {
    foreignKey: 'user_id'
});
// Products belongToMany Tags (through ProductTag)
todo.belongsToMany(todo, { 
    through: todo,
    
  });
  
  // Tags belongToMany Products (through ProductTag)
  todo.belongsToMany(todo, { 
    through: todo,
   
  });

module.exports = {
  Comment,
  Post,
  User
  
};
