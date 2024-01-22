const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express()
const port = 5000;

app.use(cors());
app.use(express.json());



const connection = mysql.createConnection({
    host: 'e-commerence.cjkww2me0e4m.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'ecommerence',
    database: 'ecommerce_db'
});



connection.connect();

app.get('/api/products', (req, res) => {
  // Handle database query to fetch produ
  connection.query('SELECT * FROM Products', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});