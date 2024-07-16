import express from 'express';
const app = express();

const healthCheck = app.get("/", (req, res) => {
    return res.send("UP");
})

module.exports = healthCheck;