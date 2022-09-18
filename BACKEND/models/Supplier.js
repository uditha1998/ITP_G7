const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const supplierSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    nic : {
        type : String,
        required : true
    },

    contactno:{
        type : Number,
        required : true
    },

    address:{
        type : String,
        required : true
    },

    password:{
        type : String,
        required : true
    }
    

})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;
