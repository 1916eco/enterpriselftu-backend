const mongoose = require('mongoose');

const adminUser = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('AdminUserSchema', adminUser)