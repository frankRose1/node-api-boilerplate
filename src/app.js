import express from 'express'
import middleware from './middleware'
import routes from './services'
import errorHandlers from './middleware/errorHandlers'
import {
    applyMiddleware,
    applyRoutes
} from './utils'


const app = express()
applyMiddleware(middleware, app)
applyRoutes(routes, app)
applyMiddleware(errorHandlers, app)

export default app