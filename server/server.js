require("dotenv").config()
const express = require('express')
const sequelize = require("./db.js");
const routes = require('./routes/index.js')
const cors = require('cors');
const fileUpload = require('express-fileupload')
const path = require('path')
const errorMiddleware = require('./middlewares/errorMiddleware.js')
const cookieParser = require("cookie-parser");


const PORT = process.env.PORT || 8000;
const app = express()

const corsOptions ={
    origin:`${process.env.FRONT_API}`, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use('/api/v1',express.static(path.resolve(__dirname, 'public/assets/img/projects')))
app.use('/api/v1',express.static(path.resolve(__dirname, 'public/assets/img/products')))
app.use('/api/v1',express.static(path.resolve(__dirname, 'public/assets/img/services')))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api/v1', routes);
app.use(cookieParser())
app.use(errorMiddleware)


const run = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true,
        force: true});
        app.listen(PORT, '0.0.0.0' , () => {
            console.log(`server running on port: ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};
run();