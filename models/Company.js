const { DataTypes, Sequelize } = require( 'sequelize');
const connection = require('../managers/SequelizeConnection');
const CompanyReportWip = require('./CompanyReportWip');

const Company =  connection.define ('Company' ,
    {
                  company_id: {
                      type: DataTypes.NUMBER,
                      primaryKey: true,
                  },
                  name:                    DataTypes.STRING,
                  url_ir_page:             DataTypes.STRING,
                  cfo_email:               DataTypes.STRING,
              }, {
                  modelName: 'Company',
                  tableName: 'company',
                  sequelize: connection
              },
);

Company.associate = (models) => {
    console.log('Assoc...');
//    Company.hasMany(models.CompanyReportWip);
};

module.exports = Company;
