module.exports = function (err, req, res, next) {
    console.log(err.stack)
    res.json({
        error: "SomeThing Went Wrong!",
        status: err.status || 500,
    })
}
