'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SensorData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SensorData.init({
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Temperature is Required" },
        notNull: { msg: "Temperature is Required" }
      }
    },
    humidity: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Humidity is Required" },
        notNull: { msg: "Humidity is Required" }
      }
    }
  }, {
    sequelize,
    modelName: 'SensorData',
  });
  return SensorData;
};