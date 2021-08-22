const express= require('express')
const dotenv= require('dotenv');
const mongoose = require('mongoose');


const dbconnection = async () => {
const url = process.env.MONGO_URL
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
})

const con =mongoose.connection
con.on('open', ()=>{
    console.log("database connected");
})

}
module.exports  =dbconnection