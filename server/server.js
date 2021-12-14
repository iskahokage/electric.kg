require('dotenv/config')
const express = require('express')
const app = express()
const routes = require('./routes/index.js')
const cors = require('cors');
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose');
const path = require('path')


const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/', routes);


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