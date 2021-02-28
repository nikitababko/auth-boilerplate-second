const Customer = require('../models/Customer');

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const newCustomer = new Customer({
      name,
    });

    const savedCustomer = await newCustomer.save();

    res.json(savedCustomer);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};

exports.getAll = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};
