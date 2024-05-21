const fs = require('fs');
const path = require('path');
const { config } = require('dotenv');
var basename = path.basename(module.filename);
const modelsDir = path.join(__dirname, 'models');
const {DataTypes, Sequelize} = require("sequelize");

config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        define: {
            timestamps: false,   // createdAt etc...
            underscored: false,  // use camelCase
            freezeTableName: true  // do not make plural
        },
    });
//

sequelize.authenticate().then(function() {
    console.log('Database connected and authenticated!');
    return true;
}).catch(function(err) {
    console.error('Failed to connect and authenticate', err);
    return false;
});

const db = {};

console.log(modelsDir);
fs.readdirSync(modelsDir)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        let model = require(path.join(modelsDir, file)); // (conn, DataTypes);

        console.log('------------ model: ', model.name);
        db[model.name] = model;
    });

console.log(db)
console.log('------------')

// .forEach(function (file) {
//         console.log({file})
//         var model = sequelize.import(path.join(__dirname, file));
//         // require(path.join(modelsDir, file))(
//         //     sequelize     ,
//         //     Sequelize.DataTypes
//         // );
//         console.log('------------ model: ', model)
//         db[model.name] = model;
//     })

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
})



db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
