const mongoose=require('mongoose');
 
let Students=new mongoose.Schema({
    __id:mongoose.Schema.Types.ObjectId,
    
    Name:{
        type:String,
        required:true
    },
    F_Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Course:{
        type:String,
        required:true
    },
},
{
    collection:'StudentDetails'
});

module.exports=mongoose.model('Students',Students);