const userSchema = require('../models/Users');
const mongoLib = require('../lib/mongodb');

class userServices{
  constructor(){
    this.schema = userSchema;
    this.db = new mongoLib();
  }

  async getAllUsers(){
    return await this.db.getAll(this.schema)
  }

  async createUser(data){
    return await this.db.create(this.schema, data);
  }

  async getUser(userId){
    return await this.db.getOne(this.schema, userId);
  }

  async updateUser(userId, data){
    return await this.db.update(this.schema,userId,data);
  }

  async deletUser(userId){
    return await this.db.delete(this.schema, userId);
  }
}

module.exports = userServices;