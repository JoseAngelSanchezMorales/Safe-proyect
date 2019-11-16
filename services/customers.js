const customerSchema = require('../models/Customers');
const mongoLib = require('../lib/mongodb');

class CustomerServices{
  constructor(){
    this.schema = customerSchema;
    this.db = new mongoLib();
  }

  async createCustomer(data){
    return await this.db.create(this.schema, data);
  }

  async getCustomer(customerId){
    return await this.db.getOne(this.schema, customerId);
  }

  async updateCustomer(customerId, data){
    return await this.db.update(this.schema,customerId,data);
  }

  async deleteCustomer(customerId){
    return await this.db.delete(this.schema, customerId);
  }
}

module.exports = CustomerServices;