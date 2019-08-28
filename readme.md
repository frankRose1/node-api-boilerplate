# Node, Docker, Redis, and MongoDB Boilerplate
Starter code to bootstrap node apis

## Useful commands
    - ```docker-compose run api npm install``` to install all packages in package.json
        **you must do this before attempting to build the image the first time**
    - ```docker-compose run api install --save <packageName>``` to install a specific package
    - ```docker-compose stop``` to stop all running containers
    - ```docker-compose down``` to remove containers and volumes