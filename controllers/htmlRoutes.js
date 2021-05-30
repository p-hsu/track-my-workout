// require models and path
const path = require("path");
const db = require("../models");

module.exports = (app) => {
    // app.get for index.html
    app.get('/'), (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html")
    )};
    // app.get for exercise.html
    app.get('/exercise'), (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html")
    )};
    // app.get for stats.html
    app.get('/stats'), (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html")
    )};
}