'use strict';
const Sequelize = require('sequelize');
const sequelize = require('../src/db');
const DataTypes = require('sequelize').DataTypes;

class User extends Sequelize.Model{}
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

sequelize.sync();
module.exports = User;