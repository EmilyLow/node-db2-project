const express = require("express");
const welcomeRouter = require("./welcome-router");
const carsRouter = require("./cars-router")

const server = express();
const port = 5000;

server.use(express.json());

server.use(welcomeRouter);
server.use(carsRouter);

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})
