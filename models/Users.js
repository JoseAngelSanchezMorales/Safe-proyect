const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
  name:{
    type:String
  },
  phone:{
    type:String
  },
  password:{
    type:String
  },
  email:{
    type:String
  },
  dependencia:{
    type:String
  },
  unidad:{
    type:String
  }
});

module.exports = mongoose.model('User', userSchema);