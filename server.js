const express = require('express');
const projectRouter = require('./routers/projects');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello World</h2>`)
});

module.exports = server;