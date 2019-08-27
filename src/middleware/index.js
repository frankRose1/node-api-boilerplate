/**
 * Import all middleware here to be exported as a single Array
 * Middleware is applied using a utility function
 */
import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from './common'
import { handleRedisCache } from './caching'

export default [
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleRedisCache
]