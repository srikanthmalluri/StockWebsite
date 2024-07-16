
import express from 'express';
import mongoose from 'mongoose';
import logger from './logger';
const polling = require('../routes/StockPoll')
const healthCheck = require('../routes/endpoints')
const app = express();
const port = process.env.PORT || 3000;
const connectionUri = 'mongodb://127.0.0.1:27017/StockDB';
mongoose.connect(connectionUri)
    .then(() => {
        logger.info("MongoDb connected ")
    })
    .catch((err) => {
        // console.log('Something went wrong ', err);
        logger.error("Something went Wrong", err);
    });


app.use(polling)

app.get("/", (req, res) => {
    return res.send("UP");
})

app.listen(port, () => logger.info(`server is running on port: ${port}`))

export { app };