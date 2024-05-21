const express = require( "express");
const cors = require("cors");
const bodyParser = require( 'body-parser');
const routes  = require('./routes');
const db = require("./db");

console.log('in app.js')

require("reflect-metadata");
require('dotenv').config();

const app = express();
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: true }));
app.use('/', routes);
app.use(express.json());

const start = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log('---------------------------');
            console.log(`Server started on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

console.log('starting app.js')

void start();
