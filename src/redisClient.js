import redis from 'redis'
import bluebird from 'bluebird'

// adds "Async" to all node_redis functions
// eg client.getAsync()
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

// TODO change this to an ENV variable
const REDIS_URI = 'redis://redis:6379';

const client = redis.createClient(REDIS_URI);

export default client