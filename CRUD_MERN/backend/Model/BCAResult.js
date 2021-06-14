const mongoose=require('mongoose')

const BCARes=new mongoose.Schema({
    res_id:[{type:mongoose.Schema.Types.ObjectId, ref:'Students'}],
    Name:{
        type:String
    },
    Course:{
        type:String
    },
    Fundamental:{
        type:Number
    },
    BasicElec:{
        type:Number
    },
    Maths:{
        type:Number
    },
    DataStructure:{
        type:Number
    },
    CLang:{
        type:Number
    },

},
{collection:'BCAResult'}
)
module.exports=mongoose.model('BCARes',BCARes)