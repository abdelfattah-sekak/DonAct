mongoose = require('mongoose')

const associationSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        maxlength:100
    },
    type:{
        type:String,
        required:true,
        maxlength:100
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        data:Buffer,
        required:true
        
    }
},{timestamps:true})


const Association = mongoose.model('Association',associationSchema)

module.exports={
    Association
}