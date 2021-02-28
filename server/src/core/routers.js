const UserController = require('../controllers/UserController');
const CustomerController = require('../controllers/CustomerController');
const express = require('express');
const auth = require('../middleware/auth');

const createRouters = (app) => {
  // User
  app.use(express.json());

  app.post('/auth', UserController.create);
  app.post('/auth/login', UserController.login);
  app.get('/auth/logout', UserController.logout);
  app.get('/auth/loggedIn', UserController.loggedIn);

  // Customer
  app.post('/customer', auth, CustomerController.create);
  app.get('/customer', auth, CustomerController.getAll);
};

module.exports = createRouters;
