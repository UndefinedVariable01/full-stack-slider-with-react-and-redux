require("dotenv").config()
const dbConnectionAddress = process.env.SLIDER_DB_CONNECTION_ADDRESS
const environment = process.env.NODE_ENV
const port = process.env.PORT || 5000

const express = require("express")
const compression = require("compression")
const cors = require("cors")

const app = express()

app.use(compression())
app.use(cors())

require("./config/db")(environment, dbConnectionAddress)
require("./config/routes")(app)

app.listen(port, () => {
    console.log(environment.trim() + " - Listening On Port " + port)
})
