require("dotenv").config()
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const express = require('express')
const sequelize = require("./db.js");
const routes = require('./routes/index.js')
const cors = require('cors');
const fileUpload = require('express-fileupload')
const path = require('path')
const errorMiddleware = require('./middlewares/errorMiddleware.js')
const cookieParser = require("cookie-parser");
const {User} = require('./models/models')

const PORT = process.env.PORT || 8000;
const app = express()

AdminBro.registerAdapter(AdminBroSequelize)
const adminBro = new AdminBro({
    databases: [sequelize],
    rootPath: '/admin',
  })
const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

const corsOptions ={
    origin:`${process.env.FRONT_API}`, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// app.use(adminBro.options.rootPath, router)
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
        await sequelize.sync({alter: true});
        app.listen(PORT, '0.0.0.0' , () => {
            console.log(`server running on port: ${PORT}`);

        });
    } catch (e) {
        console.error(e);
    }
};
run();