import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CustomerForm, CustomerList } from 'components';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const customersRes = await axios.get('/customer');
    setCustomers(customersRes.data);
  };

  useEffect(() => {
    getCustomers();
  }, [customers]);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
};

export default Customers;
