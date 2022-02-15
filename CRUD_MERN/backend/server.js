const mongoose=require('mongoose');
const cors=require('cors');
const express=require('express');
const PORT=7000;
const app=express();
const stuRoutes=require('../backend/Routes/User');
const conRoutes=require('../backend/Routes/Contact');
const path = require('path'); 

//server.js
app.use(cors());
app.use(express.static(path.resolve(__dirname,'../')));
// app.set('view engine','ejs');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/CollegeDB',
{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log("Database is connected")
})
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));  
  app.use('/studentdb', stuRoutes);
  app.use('/contactdb', conRoutes);
app.listen(PORT,function () {
    console.log('Server Lisening On Port : ' + PORT);
    });

