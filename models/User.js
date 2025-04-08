const mongoose=require('mongoose')

const Userschema=mongoose.Schema({
    user:{type:String,require:true},
    email:{type:String,require:true},
    passwoed:{type:String,require:true},
})

const User =mongoose.model('User',Userschema)
module.exports = User;