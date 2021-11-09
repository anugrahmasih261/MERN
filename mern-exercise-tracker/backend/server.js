const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  //this import helps us to connect db

//this is to have environment variable in dotenv file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//here cors is middleware
app.use(cors());
//this will allow us to parse json because our server will send receive json data
app.use(express.json());

//the .env file has connection string which helps here to connect with db in atlas_uri
const uri = process.env.ATLAS_URI;  
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//here first we need to import the files then we can use it
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//here we use both upper files from router folder
//to use any file we need cmd app.use after import of the file
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});