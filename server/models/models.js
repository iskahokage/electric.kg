const sequelize = require("../db.js");

const { DataTypes } = require("sequelize");



const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: DataTypes.DATE
      }
});


const Product = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull: false },
    price: {type: DataTypes.INTEGER, allowNull: false },
    image: {type: DataTypes.STRING, allowNull: false }
})

const Service = sequelize.define("service",{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull: false  },
    image: {type: DataTypes.STRING, allowNull: false },
})

const Project = sequelize.define('project',{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false },
    description: {type: DataTypes.STRING, allowNull: false },
})

const Project_image = sequelize.define("project_image",{
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, allowNull: false }
})


const Appeal = sequelize.define("appeal", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})


User.hasOne(Product)
Product.belongsTo(User)

User.hasOne(Service)
Service.belongsTo(User)

Project.hasMany(Project_image, {as: "project_images", onDelete: 'cascade'})
Project_image.belongsTo(Project,{
    foreignKey: "projectId",
    as: "project"
})



module.exports = {
    User,
    Product,
    Service,
    Project,
    Project_image,
    Appeal
}