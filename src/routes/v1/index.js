const express = require('express');
const { InfoController } = require('../../controllers');
const bookingRouter = require('./booking.routes');

const v1Router = express.Router();

v1Router.get('/info', InfoController.info);
v1Router.get('/bookings', bookingRouter)


module.exports = v1Router;