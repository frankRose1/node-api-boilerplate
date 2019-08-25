/**
 * Common middleware such as cors and compression
 */
import cors from 'cors'
import parser from 'body-parser'
import compression from 'compression'

/**
 * Apply cors middlware to the express app
 * @param {Object} app - Express application
 */
export const handleCors = app => {
    app.use(cors({credentials: true, origin: true}))
}

/**
 * Apply body parsing middleware to application
 * @param {Object} app - Express application
 */
export const handleBodyRequestParsing = app => {
    app.use(parser.urlencoded({ extended: true }))
    app.use(parser.json())
}

/**
 * Apply compression middlware to the express app
 * @param {Object} app - Express application
 */
export const handleCompression = app => {
    app.use(compression())
}