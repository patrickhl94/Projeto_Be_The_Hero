const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(routes);
    this.app.use(errors());
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
}

module.exports = new App().app;
