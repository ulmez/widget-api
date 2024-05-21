//import { Sequelize } from 'sequelize'
const {Sequelize} = require('sequelize');
require('dotenv').config();

const dbName = (process.env.DB_DATABASE);
const dbUser = (process.env.DB_USERNAME);
const dbHost = (process.env.DB_HOST);
const dbDialect = 'postgres';
const dbPassword = (process.env.DB_PASSWORD);

const SequelizeConnection = new Sequelize(dbName, dbUser, dbPassword,
    {
        host: dbHost,
        dialect: dbDialect,
        define: {
            timestamps: false,   // createdAt etc...
            underscored: false,  // use camelCase
            freezeTableName: true  // do not make plural
        }
});

module.exports = SequelizeConnection;
