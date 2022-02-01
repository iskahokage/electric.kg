require("dotenv").config()
const express = require('express')
const sequelize = require("./db.js");
const routes = require('./routes/index.js')
const cors = require('cors');
const fileUpload = require('express-fileupload')
const path = require('path')
const errorMiddleware = require('./middlewares/errorMiddleware.js')


const PORT = process.env.PORT || 8000;
const app = express()
app.use(cors())
app.use('/api/v1',express.static(path.resolve(__dirname, 'public/assets/img')))
app.use(express.json())
app.use(fileUpload({}))
app.use('/api/v1', routes);
app.use(errorMiddleware)


const run = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`server running on port: ${PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
};
run();