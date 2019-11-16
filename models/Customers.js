const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.set('useCreateIndex', true)

// create schema
const customerSchema = new Schema({
    name: {
        type: String,
        //required: true 
    },
    email: {
        type: String,
        //required: true,
    },
    password: {
        type: String,
        //required: true     
    },
    phone: {
        type: String,
        //required:true,
        maxlength: 10
    },
    curp: {
        type: String,
        //required: true
    },
    contacts: [{
        name: {
            type: String,
            //required: true
        },
        email: {
            type: String,
            //required: true,
            //unique: true
        },
        phone: {
            type: String,
            //required: true,
            //unique: true
        },
    }],
    medicalHistory:[
        {
            diseases:[{ disease: String }],
            alegies:[{ allergie: String }],
            medicines:[{ medicine:String }],
            blood: String
        }
    ],
    eage: {
        type: Number
    },
    addres: {
        type: String
    }
})

customerSchema.pre('save', async next => {
    try {

        if (this.method !== 'local') {
            next();
        }

        // Generate salt to add a crypt pass
        const salt = await bcrypt.genSalt(10)
        const newPassword = bcrypt.hash(this.local.password, salt)
        this.local.password = newPassword;
        next();
    } catch (error) {
        next(error)
    }
});

customerSchema.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.local.password)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = mongoose.model('Customer', customerSchema);
