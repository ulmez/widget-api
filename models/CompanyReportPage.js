const { DataTypes, Sequelize } = require( 'sequelize');
const connection = require('../managers/SequelizeConnection');



const CompanyReportPage = connection.define ('CompanyReportPage' ,
    {
        company_id:              DataTypes.INTEGER,
        period:                  DataTypes.STRING,
        page_number:             DataTypes.INTEGER,
        title:                   DataTypes.STRING,
        content:                 DataTypes.STRING,
        content_summary:         DataTypes.STRING,
        content_vector:          DataTypes.STRING,
        classes:                 DataTypes.STRING,
    },
    {
        modelName: 'CompanyReportPage',
        tableName: 'company_report_page',
        sequelize: connection
    },
);

CompanyReportPage.associate = (models) => {

};

module.exports = CompanyReportPage
