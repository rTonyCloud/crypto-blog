const path = require('path');

// express import
const express = require('express');

// import express session
const session = require('express-session');

// import helpers
const helpers = require('./utils/helpers');


// handlebars setup
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });


// express and port
const app = express();
const PORT = process.env.PORT || 3001;


// sequelize 
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    expires: 10 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// sync sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});