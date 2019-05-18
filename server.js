const express = require('express');
const projectRouter = require('./routers/projects');
const actionRouter = require('./routers/actions');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);
server.use('/actions', actionRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello World</h2>`)
});

module.exports = server;