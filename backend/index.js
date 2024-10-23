const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('./connection/conn');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);

app.listen(process.env.PORT , () => {
    console.log("Server is started");
})
