const freefit = require('./freeFitService')
const status = require('http-status');
require('dotenv').config()

class freefitController {
    static async searchInFreeFit(req, res, next) {
        try {

            const { CompanyID, area, freeText, subcategoryId } = req.body;
            const { data } = await freefit.freeFitService(CompanyID, area, freeText, subcategoryId)

            res.send(data.d)
        } catch (error) {

            console.error(error)
            res.status(status.INTERNAL_SERVER_ERROR)
                .send({ error: "Internal server error" })
        }
    }

    static validateSearch(req, res, next) {
        const { area, subcategoryId } = req.body
        if (!area && !subcategoryId) {
            throw new Error("Please provide a valide data")
        } else {
            next()
        }
    }
}

module.exports = freefitController;