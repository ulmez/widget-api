const  express = require("express");
const ApiService = require("../services/ApiService");

const { config } = require('dotenv');

config();

/**
 * ToDo: Change this to GET, consistent with API.
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getRatios = async (req, res) => {
    const isin = req.body.isin;
    const rv = await ApiService.getRatios(isin);

    res.status(200).send(rv);
};

const getWidgetRatios= async (req, res) => {
    res.status(200).sendFile(`${process.env.WIDGET_FOLDER}/ratios.js`);
};

module.exports = {
    getRatios,
    getWidgetRatios,
};
