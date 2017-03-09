'use strict';
module.exports = function(sequelize, DataTypes) {
  var product = sequelize.define('product', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    productType: DataTypes.STRING,
    imageLink: DataTypes.TEXT,
    productLink: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        models.product.belongsTo(models.user);
      }
    }
  });
  return product;
};
