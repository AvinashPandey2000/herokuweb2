const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const dotenv = require('dotenv');
const aliensRoute= require('../routers/aliens');
const app = express();
const ejs =require('ejs')


//db connection
const dbconnection= require('../connection/dbconnection');
require('dotenv').config();

app.use(express.json());

//router use
app.use('/',aliensRoute);


//connection use 
dbconnection();

//set view engine
app.set('view engine','ejs');


//server is listening 
app.listen(process.env.PORT, () => {
    console.log(`server is listening on port ${process.env.PORT}`);
})

