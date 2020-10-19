//? Do these defaults from lecture fit with the instructions in Canvas or is there overlap that doesn't fit?

const express = require("express");
const carsRouter = require('./cars-router');
const welcomeRouter = require("./welcome/welcome-router")

//!Excluding "Helmet" because I don't know what it is

const server = express();

const port = 5000; //Should maybe do process.env.PORT later

server.use(express.json());
server.use(carsRouter);
// server.use(welcomeRouter);

//! Copying this but don't understand the point. Is this for when WelcomeRouter is present but not working? Or when no routers are workinug?

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})


server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})


