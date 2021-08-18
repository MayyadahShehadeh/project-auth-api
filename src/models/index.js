'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const usersModel = require('./users.js');
const footballModel = require('./footballTeam');
const Collection = require('./data-collection');


const DATABASE_URL =
  process.env.NODE_ENV == "test" ? "sqlite:memory": process.env.DATABASE_URL;


const sequelize = new Sequelize(DATABASE_URL, {});

const football = footballModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  users: usersModel(sequelize, DataTypes),
  football: new Collection(football),
}