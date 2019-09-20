import express from 'express'
import request from 'supertest'
import middleware from '../../src/middleware'
import errorHandlers from '../../src/middleware/errorHandlers'
import routes from '../../src/services'
import { applyRoutes, applyMiddleware } from '../../src/utils'
import '../../src/services/user/model'

// an example of how you could test api endpoints
describe('routes', () => {
    let app;

    beforeEach(()=>{
        app = express()
        applyMiddleware(middleware, app)
        applyRoutes(routes, app)
        applyMiddleware(errorHandlers, app)
    })

    describe('not found', () => {
        it('should return a 404', async () => {
            const res = await request(app).get('/not_found')
            expect(res.status).toBe(404)
        })
    })
})