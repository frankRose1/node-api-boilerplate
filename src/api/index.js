/**
 * Import the router from each api and export as a single Array
 */
import exampleRoutes from './v1/example';
import userRoutesV1 from './v1/user';

export default [
    { prefix: '/', endpoints: exampleRoutes },
    { prefix: '/api/v1/users', endpoints: userRoutesV1 }
]