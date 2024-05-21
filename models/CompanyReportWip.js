const { DataTypes, Sequelize } = require( 'sequelize');
const connection = require('../managers/SequelizeConnection');
//const Company = require('./Company');



const CompanyReportWip = connection.define ('CompanyReportWip' ,
    {
        item_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
        },
        title:                   DataTypes.STRING,
        cision_link:             DataTypes.STRING,
        press_release_text:      DataTypes.STRING,
        pub_datetime:            DataTypes.STRING,
        status:                  DataTypes.STRING,
        source:                  DataTypes.STRING,
        company_id:              DataTypes.INTEGER,
        period:                  DataTypes.STRING,
        short_name:              DataTypes.STRING,
        language:                DataTypes.STRING,
        currency:                DataTypes.STRING,
        currency_multiplier:     DataTypes.NUMBER,
        pdf_url:                 DataTypes.STRING,
        pdf_text:                DataTypes.STRING,

        report_date:             DataTypes.STRING,
        report_type:             DataTypes.STRING,
        created_at:              DataTypes.STRING,
        completed_at:            DataTypes.STRING,
        published_at:            DataTypes.STRING,
        stage:                   DataTypes.STRING,
        notes:                   DataTypes.STRING,
        notes_tech:              DataTypes.STRING,
        notes_expert:            DataTypes.STRING,

        sales:                   DataTypes.NUMBER,
        cogs:                    DataTypes.NUMBER,
        gp:                      DataTypes.NUMBER,
        da:                      DataTypes.NUMBER,
        ebitda:                  DataTypes.NUMBER,
        ebit:                    DataTypes.NUMBER,
        ptp:                     DataTypes.NUMBER,
        np:                      DataTypes.NUMBER,
        totalnumberofshares:     DataTypes.NUMBER,
        eps:                     DataTypes.NUMBER,

        cce:                     DataTypes.NUMBER,
        fixedasset:              DataTypes.NUMBER,
        intangibleasset:         DataTypes.NUMBER,
        financialasset:          DataTypes.NUMBER,
        currentassets:           DataTypes.NUMBER,
        noncurrentasset:         DataTypes.NUMBER,
        totalassets:             DataTypes.NUMBER,
        shequity:                DataTypes.NUMBER,
        curliabilities:          DataTypes.NUMBER,
        ltliabilities:           DataTypes.NUMBER,
        ibl:                     DataTypes.NUMBER,

        ceo_word:                DataTypes.STRING,
        ceo_summary:             DataTypes.STRING,
        calendar_text:           DataTypes.STRING,
        calendar_json:           DataTypes.STRING,

        is_text :                 DataTypes.STRING,
        bs_text :                 DataTypes.STRING,
        meta_data :               DataTypes.STRING,

    },
    {
        modelName: 'CompanyReportWip',
        tableName: 'company_report_wip',
        sequelize: connection
    },
);

CompanyReportWip.associate = (models) => {
        console.log('Assoc...');
//        Company.belongsTo(models.CompanyReportWip);

};

//export default CompanyReportWip;
module.exports = CompanyReportWip;
