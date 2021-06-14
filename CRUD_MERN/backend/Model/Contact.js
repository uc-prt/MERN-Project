const mongoose=require('mongoose');
 
let Contacts=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    
    Email:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
},

{
    collection:'ContactDetails'
});

module.exports=mongoose.model('Contacts',Contacts);
