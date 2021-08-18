'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./users.js');
const footballModel = require('./footballTeam');
const Collection = require('./data-collection');

const DATABASE_URL = 'postgres://localhost:5432/project';

// const DATABASE_URL =
//   process.env.NODE_ENV === "testing" ? "sqlite:memory": process.env.DATABASE_URL;
//env/////////////////
// NODE_ENV=test
// DATABASE_URL=postgres://localhost:5432/project
///////////////////




const sequelize = new Sequelize(DATABASE_URL, {});

const football = footballModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  users: usersModel(sequelize, DataTypes),
  football: new Collection(football)
}