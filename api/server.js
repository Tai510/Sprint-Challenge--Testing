const express = require('express');
const gamesRouter = require("../games/gamesRouter")
const server = express();

server.use(express.json());

server.use("/games", gamesRouter)






module.exports = server; 