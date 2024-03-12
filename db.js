
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('qc', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});



(async () => {
    const image = require('./models/images');
  try {
    // Sync all defined models with the database
    await image.sync({ force: true });
    console.log('Database schema synchronized successfully');
  } catch (error) {
    console.error('Error synchronizing database schema:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
});

console.log("=============");
module.exports = sequelize;

