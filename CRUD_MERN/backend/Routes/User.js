const express=require('express');
const mongoose = require('mongoose');
const app=express();
const stuRoute=express.Router();

const courseModel=require('../Model/Course');
const stuModel=require('../Model/User');
const resModel=require('../Model/BCAResult');

stuRoute.route('/').get((req,res)=>{
    stuModel.find((err,student)=>{
    if(!err){
        res.json(student);
    }else{
        console.log(err)
    }
})
});
// 

// 
stuRoute.route('/addStudent').post((req,res)=>{
    

    let student=new stuModel({
        _id: new mongoose.Types.ObjectId(),
        Name:req.body.Name,
        F_Name:req.body.F_Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Address:req.body.Address,
        Course:req.body.Course,
        });
    student.save().then(()=>{
                    res.status(200).json({'student':'Student Added Suucessfully'});
                }).catch(err => {
                    res.status(400).send("Something Went Wrong");
                    });

    let course=new courseModel({
        c_id:student._id,
        Name:req.body.Name,
        
        Course:req.body.Course,
        Fees:req.body.Fees
    });
        course.save().then(()=>{
            res.status(200).json({'course':'Fees Added Suucessfully'});
             }).catch(err => {
                  res.status(400).send("Something Went Wrong");
              });

           let result=new resModel({
               res_id:student._id,
               Name:student.Name,
               Course:student.Course
           }) ;
           result.save().then(()=>{
            res.status(200).json({'BCA':'Result Added Suucessfully'});
        }).catch(err => {
             res.status(400).send("Something Went Wrong");
         });
             
            });
    stuRoute.route('/feesDetail').get((req,res)=>{
           courseModel.find().select("Fees").where("Course").equals("BCA").populate({
                  path:"c_id",
                 select:"Name Course"
              })
              .exec(function (err, feeInfo) {
                if (err) return err;
                res.json(feeInfo);
                
              })
              })  
   
            stuRoute.route('/updateStudent/:id').post((req,res)=>{
                stuModel.findById(req.params.id,(err,student)=>{
                    if(student){
                        // return next(new Error('Unable To Find Employee With This Id'));
                  
                        student.Name=req.body.Name;
                        student.F_Name=req.body.F_Name;
                        student.Address=req.body.Address;
                        student.Email=req.body.Email;
                        student.Phone=req.body.Phone;
                        student.Course=req.body.Course;
                        student.save().then((err,res)=>{
                            res.json('Student Record Updated Successfully')
                        }).catch(err => {
                            res.status(200).send("Updated Student Sucessfully");
                            });
                        }
 });
});

stuRoute.route('/deleteStudent/:id').get((req,res)=>{
    stuModel.findByIdAndRemove({_id:req.params.id},(err,student)=>{
        if(!err){
        res.json("record deleted");
        }
        else{
        res.json(err)
        }
    })
})
// For Result Collection
       
stuRoute.route('/addResult/:id').post((req,res)=>{
    resModel.findById(req.params.id,(err,result)=>{
        if(!result){
            // return next(new Error('Unable To Find Employee With This Id'));
        }else{
            result.Fundamental=req.body.Fundamental;
            result.BasicElec=req.body.BasicElec;
            result.Maths=req.body.Maths;
            result.DataStructure=req.body.DataStructure;
            result.CLang=req.body.CLang;
            result.save().then((err,res)=>{
                res.json('result Record Updated Successfully')
            }).catch(err => {
                res.status(200).send("Result Of Student Sucessfully Added");
                });
            }
});
});


stuRoute.route('/showResult/:id').get((req,res)=>{

resModel.findById(req.params.id).select("Name Course Fundamental BasicElec DataStructure Maths CLang").where("Course").equals("BCA").populate({
    path:"c_id",
   select:"Name Course"
})
.exec(function (err, resInfo) {
  if (err) return err;
  res.json(resInfo);
  
})
});

  module.exports=stuRoute;