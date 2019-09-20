import http from 'http'
import './databases/mongoDB'
import app from './app'

process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1)
})

process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1)
})

const { PORT = 5000 } = process.env
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}...`)
})