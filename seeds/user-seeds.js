const { User } = require('../models');

const userData = [
    {
        username: "ProgrammerDude",
        twitter: "bestprogrammer4eva",
        github: "bestprogrammer4eva",
        email: "bestprogrammer4eva@gmail.com",
        password: "Password123!"
    },
    {
        username: "steve007",
        twitter: "steve007",
        github: "steve007",
        email: "steve007@gmail.com",
        password: "Password123!"
    },
    {
        username: "TommyD",
        twitter: "TommyD",
        github: "TommyD",
        email: "TommyD@gmail.com",
        password: "Password123!"
    },
    {
        username: "SirWatson",
        twitter: "SirWatson",
        github: "SirWatson",
        email: "SirWatson@gmail.com",
        password: "Password123!"
    },
    {
        username: "Robbie123",
        twitter: "Robbie123",
        github: "Robbie123",
        email: "Robbie123@gmail.com",
        password: "Password123!"
    },
    {
        username: "dtrump",
        twitter: "dtrump",
        github: "dtrump",
        email: "dtrump@gmail.com",
        password: "Password123!"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;