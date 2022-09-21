const axios = require('axios').default
require('dotenv').config()

class Freefit {
    static async freeFitService(CompanyID, area, freeText, subcategoryId) {

        const response = await axios.post(process.env.FREEFIT_SERVER, {
            CompanyID: CompanyID,
            area: area,
            freeText: freeText,
            subcategoryId: subcategoryId
        })
        return response;
    }
}

module.exports = Freefit;