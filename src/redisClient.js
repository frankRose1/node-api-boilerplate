import redis from 'redis'
import bluebird from 'bluebird'

// adds "Async" to all node_redis functions
// eg client.getAsync()
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({ host: 'redis' });

client.on('error', err => {
    console.log(`Error connecting to redis: ${err}`)
})

export default client