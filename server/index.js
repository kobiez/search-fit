require('dotenv').config()

const app = require('./app');

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server is up at port ${process.env.SERVER_PORT}`)
});