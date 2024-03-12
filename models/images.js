const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Images extends Model {}

Images.init({
  // Define attributes here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, // Pass the sequelize connection
  modelName: 'Images', // Set the model name
  timestamps: true, // Include createdAt and updatedAt timestamps
  createdAt: 'createdAt', // Customize the createdAt field name
  updatedAt: 'updatedAt' // Customize the updatedAt field name
});

module.exports = Images;
