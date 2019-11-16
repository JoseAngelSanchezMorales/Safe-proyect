const express = require('express');
const CustomerServices = require('../services/customers');
const sendSMS = require('../lib/sms');

const customerRoutes = (app) => {
  const router = express.Router();
  const customerServices = new CustomerServices();

  app.use('/api/customers', router);

  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const customer = await customerServices.getCustomer(id)
      res.status(200).json({
        message: 'Customer retrive',
        data: customer
      })
    } catch (error) { next(error) }
  });

  router.post('/', async (req, res, next) => {
    const data = req.body;
    try {
      const createCustomer = await customerServices.createCustomer(data);
      res.status(201).json({
        message: 'Customer created',
        data: createCustomer._id
      });
    } catch (error) { next(error) }
  });

  router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updateCustomer = await customerServices.updateCustomer(id, data);
      res.status(200).json({
        message: 'Customer update',
        data: updateCustomer._id
      })
    } catch (error) { next(error) }
  });

  router.get('/sms/:id', async (req, res, next) => {
    const { id } = req.params; 
    try {
      const customerData = await customerServices.getCustomer(id);
      customerData.contacts.forEach(element => {
        sendSMS(element.phone, customerData.name)
      });
      res.status(200).json({
        message: "Contacts Alerted",
        contactPhones: customerData.contacts
      })
    } catch (error) { next(error) }
  });
}

module.exports = customerRoutes;