const express = require('express');
const UserService = require('../services/users');
const passport = require('passport');
require('../config/passport');

const customerRoutes = (app) => {
  const router = express.Router();
  const userService = new UserService();

  app.use('/api/users', router);

  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await userService.getUser(id)
      res.status(200).json({
        message: 'Customer retrive',
        data: user
      })
    } catch (error) { next(error) }
  });

  router.post('/', async (req, res, next) => {
    const data = req.body;
    try {
      const createUser = await userService.createUser(data);
      res.status(201).json({
        message: 'User created',
        data: createUser._id
      });
    } catch (error) { next(error) }
  });

  router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updateUser = await userService.updateUser(id, data);
      res.status(200).json({
        message: 'User update',
        data: updateUser._id
      })
    } catch (error) { next(error) }
  });
}

module.exports = customerRoutes;