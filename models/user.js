'use strict';
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          msg: "Please enter a valid email address."
        }
      }
    },
    username: DataTypes.STRING,
    password:{
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [4, 20],
          msg: "For your security, passwords must be between 4 and 20 characters long."
        }
      }
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
    }, {
    hooks:{
      beforeCreate: function(createdUser, options, callback){
        var hash = bcrypt.hasSync(createdUser.password, 10);
        createdUser.password = hash;
        callback(null, createdUser);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods:{
      isValidePassword: function(passwordTyped){
        return bcrypt.compareSync(passwordTyped, this.password);
      },
      toJSON: function(){
        var data = this.get();
        delete data.password;
        return data;
      }
    }
  });
  return user;
};