import axios from 'axios';
import React, { useState } from 'react';

const CustomerForm = ({ getCustomers }) => {
  const [customerName, setCustomerName] = useState('');

  const saveCustomer = async (e) => {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      await axios.post('/customer', customerData);
      getCustomers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={saveCustomer}>
        <input
          type="text"
          placeholder="Customer name"
          onChange={(e) => setCustomerName(e.target.value)}
          value={customerName}
        />
        <button type="submit">Save new Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
