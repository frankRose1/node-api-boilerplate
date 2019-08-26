import http from 'http'
import express from 'express'
import initDb from './db'
import middleware from './middleware'
import routes from './services'
import errorHandlers from './middleware/errorHandlers'
import {
    applyMiddleware,
    applyRoutes
} from './utils'

process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1)
})

process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1)
})

const app = express();
applyMiddleware(middleware, app)
applyRoutes(routes, app)
applyMiddleware(errorHandlers, app)

const { PORT = 5000 } = process.env
const server = http.createServer(app)

initDb()

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`)
})