const mongoose=require('mongoose');
 
let Course=new mongoose.Schema({
    c_id:[{ type:mongoose.Schema.Types.ObjectId, ref:'Students' }],
    Name:{
        type:String
    },  
    Course:{
        type:String
    },
    Fees:{
        type:String
    },

},

{
    collection:'CourseDetails'
});

module.exports=mongoose.model('Course',Course);