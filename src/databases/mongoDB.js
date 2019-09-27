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
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE, // try to reconnect indefinitely
    reconnectInterval: 500, // period between connection attempts in milliseconds
    connectTimeoutMS: 10000, // mongo driver will wait 10 secs to connect before failing
}

const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(MONGO_URI, dbOptions)

// successful connection
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connection open to ${MONGO_URI}`)
})

// if connection throws an error
mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error ${err}`)
})

// when connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection was disconnected')
})

// If node process ends, close the mongoose connection
process.on('SIGINIT', () => {
    mongoose.connection.close(() => { 
        console.log('Mongoose default connection disconnected through app termination'); 
        process.exit(0); 
      }); 
})