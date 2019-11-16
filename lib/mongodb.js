const { config } = require('../config');
const mongoose = require('mongoose');

const user = config.db_user;
const pass = config.db_password;
const host = config.db_host

const mongo_uri = `mongodb+srv://${user}:${pass}@${host}/test?retryWrites=true&w=majority`

mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`DB conected`))
    .catch(err => console.log(`${err} err`))
    
class MongooseLib{
    async getAll(schema){
       return await schema.find({});
    };

    async getOne(schema, id){
      return await schema.findOne({ _id: id });
    }

    async create(schema, data){
      const newRegister = await new schema(data);
      return await newRegister.save();
    }

    async update(schema, id, data){
      const updateRegister = await schema.updateOne({ _id: id }, ...data);
      return updateRegister;
    }

    async delete(schema, id){
      return await schema.deleteOne({ _id: id});
    }
};

module.exports = MongooseLib;
