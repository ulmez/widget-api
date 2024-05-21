const  ApiManager = require( "../managers/ApiManager");

/**
 *
 * Uses the array position (assuming the correct order) to choose the values
 *
 * @param {string} isin - INTERNATIONAL SECURITY IDENTIFICATION NUMBER
 * */
async function getRatios(isin) {

    try {
        const recentReports = await ApiManager.getRatios(isin);


        if (recentReports.length !== 20) {
            throw Error ('Data integrity check failed')
        }


        const ratios = {
            isin: isin,
            ratios: {
                quarterly: {
                    eps: [
                        {period: recentReports[15].period, value: recentReports[15].eps_q},
                        {period: recentReports[16].period, value: recentReports[16].eps_q},
                        {period: recentReports[17].period, value: recentReports[17].eps_q},
                        {period: recentReports[18].period, value: recentReports[18].eps_q},
                        {period: recentReports[19].period, value: recentReports[19].eps_q},
                    ],
                    sps: [
                        {period: recentReports[15].period, value: recentReports[15].sps_q},
                        {period: recentReports[16].period, value: recentReports[16].sps_q},
                        {period: recentReports[17].period, value: recentReports[17].sps_q},
                        {period: recentReports[18].period, value: recentReports[18].sps_q},
                        {period: recentReports[19].period, value: recentReports[19].sps_q},
                    ],
                    pe: [
                        {period: recentReports[15].period, value: recentReports[15].pe_ttm},
                        {period: recentReports[16].period, value: recentReports[16].pe_ttm},
                        {period: recentReports[17].period, value: recentReports[17].pe_ttm},
                        {period: recentReports[18].period, value: recentReports[18].pe_ttm},
                        {period: recentReports[19].period, value: recentReports[19].pe_ttm},
                    ],
                    ps: [
                        {period: recentReports[15].period, value: recentReports[15].ps_ttm},
                        {period: recentReports[16].period, value: recentReports[16].ps_ttm},
                        {period: recentReports[17].period, value: recentReports[17].ps_ttm},
                        {period: recentReports[18].period, value: recentReports[18].ps_ttm},
                        {period: recentReports[19].period, value: recentReports[19].ps_ttm},
                    ],
                },
                ttm: {
                    eps: [
                        {period: recentReports[3].period, value: recentReports[3].eps_ttm},
                        {period: recentReports[7].period, value: recentReports[7].eps_ttm},
                        {period: recentReports[11].period, value: recentReports[11].eps_ttm},
                        {period: recentReports[15].period, value: recentReports[15].eps_ttm},
                        {period: recentReports[19].period, value: recentReports[19].eps_ttm},
                    ],
                    sps: [
                        {period: recentReports[3].period, value: recentReports[3].sps_ttm},
                        {period: recentReports[7].period, value: recentReports[7].sps_ttm},
                        {period: recentReports[11].period, value: recentReports[11].sps_ttm},
                        {period: recentReports[15].period, value: recentReports[15].sps_ttm},
                        {period: recentReports[19].period, value: recentReports[19].sps_ttm},
                    ],
                    pe: [
                        {period: recentReports[3].period, value: recentReports[3].pe_ttm},
                        {period: recentReports[7].period, value: recentReports[7].pe_ttm},
                        {period: recentReports[11].period, value: recentReports[11].pe_ttm},
                        {period: recentReports[15].period, value: recentReports[15].pe_ttm},
                        {period: recentReports[19].period, value: recentReports[19].pe_ttm},
                    ],
                    ps: [
                        {period: recentReports[3].period, value: recentReports[3].ps_ttm},
                        {period: recentReports[7].period, value: recentReports[7].ps_ttm},
                        {period: recentReports[11].period, value: recentReports[11].ps_ttm},
                        {period: recentReports[15].period, value: recentReports[15].ps_ttm},
                        {period: recentReports[19].period, value: recentReports[19].ps_ttm},
                    ],
                },
            }
        };


        return ratios;

    } catch( error) {
        console.log(error.message);
        return {
            isin: isin,
            ratios: {
                quarterly: {
                    eps: [],
                    sps: [],
                    pe: [],
                    ps: []
                },
                ttm: {

                    eps: [],
                    sps: [],
                    pe: [],
                    ps: []
                }
            }
        }
    }
}

module.exports = {
    getRatios,
};
