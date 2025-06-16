const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('./config/db'); // Sequelize DB connection

 
const studentRoute = require('./routes/studentRoutes') 

const app = express();
const port = process.env.PORT || 8000;
 
app.use(express.json());
app.use(cors()); 

// Test route
app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/students',studentRoute)
app.listen(port, () => console.log(`Server running on port ${port}`));
