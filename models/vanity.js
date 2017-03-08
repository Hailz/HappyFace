'use strict';
module.exports = function(sequelize, DataTypes) {
  var vanity = sequelize.define('vanity', {
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // models.vanity.hasMany(models.product);
      }
    }
  });
  return vanity;
};