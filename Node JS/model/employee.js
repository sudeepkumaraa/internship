const mongoose = require('mongoose')
let Detail = mongoose.model("Detail",{
    fname:{type:String, required:true},
    lname:{type:String, required:true},
    password:{type:Number, required:true},
    position:{type:String, required:true},
    email:{type:String}
},'Detail')

module.exports= {Detail}