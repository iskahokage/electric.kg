require('dotenv').config
const express = require('express')
const routes = require('./routes/index.js')
const app = express()
const PORT = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json())
const mongoose = require('mongoose');

app.use(cors())
app.use('/api/v1', routes);


const run = async ()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`==========back started=========== ${PORT}`)
        })        
        mongoose.connect("mongodb://localhost/mongoose",
            ()=>{
            console.log('Mongoose connected')
        })
    } catch (e) {
        console.error(e)
    }
} 
run(); 