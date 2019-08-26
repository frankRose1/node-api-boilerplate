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
 * Connect to the mongo database
 */
const initDb = () => {
    mongoose.connect(MONGO_URI, dbOptions)
        .then(() => {
            console.log('Connected to Mongo...');
        })
        .catch(err => {
            console.error(`Error connecting to Mongo: ${err}`)
        })
}

export default initDb