require("dotenv").config();
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var indexRouter = require('./routes/index');
var adminViewer = require('./routes/viewAdmins');
var adminGetAll = require('./routes/adminGetAll');
const mongoose = require('mongoose')

var addAdminUser = require('./routes/addAdminUser');

mongoose.connect(process.env.MONGODB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Mongo DB Connected"))
    .catch(err=>console.log(err))

var app = express();

const AdminUser = require('./Model/AdminUser')
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
app.use('/', indexRouter);
app.use('/adminFinder', adminViewer);
app.use('/adminGetAll', adminGetAll);
app.post('/addNewAdmin',(req,res)=>{
    console.log("Added" + req.query.userId)
    const Data = new AdminUser({
        userId:req.query.userId,
        isAdmin:true
    })
    Data.save()
    res.end("Worked")
})
// app.use('/addNewAdmin', addAdminUser);


module.exports = app;
