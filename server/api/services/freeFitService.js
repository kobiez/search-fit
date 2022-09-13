const axios = require('axios').default
require('dotenv').config()

async function postRequestToFreeFit(dataFromClient) {
    
    const { CompanyID, area, freeText, subcategoryId } = dataFromClient.body;

    const response = await axios.post(process.env.FREEFIT_SERVER, {
        CompanyID: CompanyID,
        area: area,
        freeText: freeText,
        subcategoryId: subcategoryId
    })
    return response;
}

module.exports = postRequestToFreeFit;