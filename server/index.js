const express = require('express')
const cors = require('cors')
const axios = require('axios').default

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.post('/', async (req, res) => {
    const response = await axios.post('https://freefit.co.il/Master.asmx/SearchClubList', {
        CompanyID: req.body.CompanyID,
        area: req.body.area,
        freeText: req.body.freeText,
        subcategoryId: req.body.subcategoryId
    })
    const data = response.data
    res.send(data.d)
})

app.listen(port, () => {
    console.log(`server is up at port ${port}`)
});