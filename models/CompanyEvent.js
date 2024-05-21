const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../managers/SequelizeConnection');

const CompanyEvent = connection.define('CompanyEvent',
    {

        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        company_id: DataTypes.NUMBER,
        period: DataTypes.STRING,
        event_date: DataTypes.STRING,
        title: DataTypes.STRING,
    },
    {
        modelName: 'CompanyEvent',
        tableName: 'company_event',
        sequelize: connection,
    },
);
//export default  CompanyEvent;
//console.log(CompanyEvent === connection.models.CompanyEvent); // true

module.exports = CompanyEvent;

