const express=require('express');
const app=express();
const conRoute=express.Router();
const conModel=require('../Model/Contact');

conRoute.route('/').get((req,res)=>{
    conModel.find((err,student)=>{
    if(!err){
        res.json(contact);
    }else{
        console.log(err);
    }
})
});
conRoute.route('/addContact').post((req,res)=>{
    let contact=new conModel(req.body);
    contact.save().then(()=>{
                    res.status(200).json({'contact':'contact Added Suucessfully'});
                }).catch(err => {
                    res.status(400).send("Something Went Wrong");
                    });
            });
     
  module.exports=conRoute;


