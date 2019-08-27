 import client from '../redisClient'
 
 /**
  * Add the redis client to middleware so that it can be
  * easily accessed inside of route handlers
  * @param {Object} app - express app 
  */
export const handleRedisCache = app => {
    app.use((req, res, next) => {
        req.redis = client
        next()
    })
}