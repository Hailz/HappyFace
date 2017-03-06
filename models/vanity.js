'use strict';
module.exports = function(sequelize, DataTypes) {
  var vanity = sequelize.define('vanity', {
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vanity;
};