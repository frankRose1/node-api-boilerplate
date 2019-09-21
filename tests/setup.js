import mongoose from 'mongoose'

import '../src/services/user/model'

/**
 * Remove all collections in the database
 */
const removeAllCollections = async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany();
    }
}

const dropAllCollections = async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        try {
            await collection.drop();
        } catch (err) {
            // Sometimes this error happens but it can be safely ignored
            if (error.message === 'ns not found') return
            // This error occurs when using it.todo. Can also be safely ignored
            if(error.message.includes('a background operation is currently running')) return
            console.log(error.message)
        }
    }
}

/**
 * This helper function will connect to mongodb before all tests run and
 * allow easy concurrent testing. It will also remove collections after each test
 * for a clean slate. After all tests run it will drop all collections and disconnect
 * mongoose
 * @param {String} databaseName - name of the mongodb database. Each test suite should
 * have it's own unique databaseName 
 */
export const setupDB = databaseName => {
    // Connect to mongodb
    beforeAll(async () => {
        const mongo_uri = `mongodb://127.0.0.1/${databaseName}`
        await mongoose.connect(mongo_uri, { useNewUrlParser: true, useCreateIndex: true })
    })

    // Clean up database between each test
    afterEach(async () => {
        await removeAllCollections()
    })

    // Drop collections and disconnect mongoose
    afterAll(async () => {
        await dropAllCollections()
        await mongoose.connection.close()
    })
}
