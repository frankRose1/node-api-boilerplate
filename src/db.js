import mongoose from 'mongoose'

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const dbOptions = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE, // try to reconnect indefinitely
    reconnectInterval: 500, // period between connection attempts in milliseconds
    connectTimeoutMS: 10000, // mongo driver will wait 10 secs to connect before failing
}

const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

/**
 * Connect to the mongo database. Wait for a successful 
 * connection before starting the server.
 * @param {Object} server - application http server
 * @param {Number} port - port the server is listening on
 */
const initDBAndServer = (server, port) => {
    mongoose.connect(MONGO_URI, dbOptions)
        .then(() => {
            console.log('Connected to Mongo...');
            server.listen(port, () => {
                console.log(`Server is running on http://localhost:${port}...`)
            })
        })
        .catch(err => {
            console.error(`Error connecting to Mongo: ${err}`)
        })
}

export default initDBAndServer