const mongoose = require("mongoose")

module.exports = function (environment, dbConnectionAddress) {
    if (environment === "production") mongoose.set("autoIndex", false)
    mongoose.set("useNewUrlParser", true)
    mongoose.set("useUnifiedTopology", true)

    mongoose.connect(dbConnectionAddress, (err) => {
        if (err) console.log(err.message)
        else console.log("Connection To DB Stablished...")
    })

    mongoose.connection.on("error", (err) => {
        console.log(err.message)
    })

    mongoose.connection.on("disconnected", () => {
        console.log("Disconnected From DB...")
    })

    mongoose.connection.on("reconnected", () => {
        console.log("Reconnected To DB...")
    })
}
