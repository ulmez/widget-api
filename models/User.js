const  { DataTypes, models} = require( 'sequelize');
const connection = require('../managers/SequelizeConnection');


const User =  connection.define ('User' ,
{
        user_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        password: DataTypes.STRING,
        force_password_change: DataTypes.BOOLEAN,
        company_id: DataTypes.NUMBER,
        settings: DataTypes.STRING,
        created_date: DataTypes.STRING,
        last_login_date: DataTypes.STRING,
        access: DataTypes.STRING,

    },
    {
        modelName: "User",
        tableName: 'users',
        sequelize: connection
    },
);

User.associate = (models) => {
    console.log('assoc...');
//        Company.belongsTo(models.CompanyCalendar);
};

module.exports = User;

