# Node, Docker, Redis, and MongoDB Boilerplate
Starter code to bootstrap node apis that use express, redis, and mongodb. Docker is used for easy development. Also supports next gen javascript.

## Useful commands
    - ```docker-compose run api npm install``` to install all dependencies in package.json
        **you must do this before attempting to build the image the first time**
    - ```docker-compose run api npm install --save <packageName>``` to install a specific package
    - ```docker-compose stop``` to stop all running containers
    - ```docker-compose down``` to remove containers and volumes

## Tests
 - ```docker-compose run --rm api npm run test``` will run all tests suites with jest

## Build
  ```docker-compose run --rm api npm run build``` will create a ```dist/``` dir and compile all code with babel