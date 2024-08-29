const express = require('express');
const { InfoController } = require('../../controllers');

const v1Router = express.Router();

v1Router.get('/info', InfoController.info);

module.exports = v1Router;