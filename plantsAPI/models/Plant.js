const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Plant = sequelize.define('Plant', {
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    latinName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: 'common',
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    tableName: 'plants',
})

module.exports = Plant;