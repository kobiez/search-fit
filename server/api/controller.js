const postRequestToFreeFit = require('./services/freeFitService')
const status = require('http-status');
require('dotenv').config()

class freefitController {
    static async postToFreeFitServer(req, res, next) {
        try {
            const { data } = await postRequestToFreeFit(req)
            res.send(data.d)
        } catch (error) {
            console.error(error)
            res.status(status.INTERNAL_SERVER_ERROR)
                .send({ error: "Internal server error" })
        }
    }

    static postRequestValidate(req, res, next) {
        const { area, subcategoryId } = req.body
        if (!area && !subcategoryId) {
            throw new Error("Please provide a valide data")
        } else {
            next()
        }
    }
}

module.exports = freefitController;