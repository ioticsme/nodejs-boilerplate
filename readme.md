# NodeJS Boilerplate (Express)

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

NodeJS Boilerplate on ExpressJS framework.

## Stack
NodeJs + MySQL

## Installation

Boilerplate requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.
Create `.env` file from `.env.example` and update required environment parameteres.
```sh
cd <project root>
npm i
npm run dev
```
Verify the development setup by navigating to your server address in your preferred browser.
```sh
127.0.0.1:3000
```
For production environments...
```sh
npm install --production
NODE_ENV=production node app
```

## Packages

Boilerplate is currently extended with the following packages.
Instructions on how to use them in your own application are linked below.

| Package | README | env |
| ------ | ------ | ------ |
| express js | https://expressjs.com | Production |
| sequelize | https://sequelize.org/master/ | Production |
| mysql2 | https://www.npmjs.com/package/mysql2 | Production |
| dotenv | https://www.npmjs.com/package/dotenv | Production |
| path | https://www.npmjs.com/package/path | Production |
| nodemon | https://www.npmjs.com/package/nodemon | Development |

## Docker

Boilerplate is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 3000, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd <project root>
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the boilerplate image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of boilerplate.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 4100 of the host to
port 3000 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker-compose up --build
```
Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:4100
```