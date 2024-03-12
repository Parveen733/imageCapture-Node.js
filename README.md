# Commodity Digital Quality Control - Backend

This is the backend of the Commodity Digital Quality Control (QC) application, built using Node.js/Express and MySQL.

## Setup

1. Clone this repository.
2. Navigate to the `backend` directory.
3. Install dependencies: `npm install`.
4. Set up MySQL database:
   - Create a database named `qc`.
   - Configure database connection in `db.js`.
5. Start the server: `node index.js`.



## Technologies Used

- Node.js
- Express
- Sequelize
- MySQL

## Folder Structure

- `routes/`: Contains route handlers.
- `controllers/`: Contains controller functions.
- `models/`: Contains Sequelize models.
- `db.js`: Database connection configuration.
- `index.js`: Main server file.

## Additional Notes

- Adjust the database connection details according to your setup.
- Ensure MySQL server is running before starting the backend server.