require('dotenv').config()

const app = require('./app');
const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => {
    console.log(`server is up at port ${port}`)
});