'use strict';
const { Model } = require('sequelize');
const UserSchema = require('./schema/user')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.UserImages = this.hasMany(models.UserImage)
      User.Likes = this.hasMany(models.Like)
      User.AuthenticityTokens = this.hasMany(models.AuthenticityToken)    }
  };

  const { tableAttributes } = UserSchema(sequelize, DataTypes)
  User.init( tableAttributes, {
    sequelize,
    modelName: 'User',
  });
  return User;
};