const {Sequelize, QueryTypes} = require ("sequelize");
const db = require('./../db');

/**
 *
 * @param {string} isin -
 *
 * */
async function getRatios(isin) {

    const rv = await db.sequelize.query(`
            SELECT  CR.company_id,
                    period, 
                    eps_q, 
                    sps_q, 
                    eps_ttm,
                    sps_ttm, 
                    pe_ttm, 
                    ps_ttm
            FROM   company_report CR, stock S
            WHERE  S.isin = :isin
            AND    S.company_id  = CR.company_id
            ORDER BY period desc
            LIMIT  20            
            `,
        {
            replacements: { isin },
            type: QueryTypes.SELECT,
            nest: false
        });

    const latestPeriodsInOrder = rv.reverse();

    return latestPeriodsInOrder;
}

module.exports = {
    getRatios,
};
