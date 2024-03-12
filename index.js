const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');
// const db = 
const router = require('./router');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
app.use("/images", express.static(path.join(__dirname, 'images')));
// Routes
app.use('/api', router);

// Start server
app.listen(port, async () => {
  const sequelize=require('./db');
  require("./models/images")
  await sequelize.sync();
console.log("All models were synchronized successfully.");
  console.log(`Server is running on port ${port}`);
});