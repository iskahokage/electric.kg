require('dotenv/config')
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
        // mongoose.connect("mongodb+srv://4ikirindo4i:4ikirindo4i@electrickgcluster.ggexu.mongodb.net/ElectricKGCluster?retryWrites=true&w=majority",
        mongoose.connect('mongodb://localhost/electrickg',   
        ()=>{
            console.log('Mongoose connected')
        })
    } catch (e) {
        console.error(e)
    }
} 
run(); 