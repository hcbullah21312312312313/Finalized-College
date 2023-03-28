//jshint ESversion 6
require('dotenv').config();
const express = require ('express')
const bodyParser=require('body-parser')
const ejs=require('ejs')
const app = express()
const StudentsModel=require('./module/mongooseConnect.js')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => 
res.render('index'))

app.get('/applyOnline',function(req, res) {
    res.render('apply')
})
app.post('/applyOnline',function(req,res){
    const fname=req.body.fname;
    const lname=req.body.lname;
    const fatherName=req.body.father;
    const motherName=req.body.mother;
    const address=req.body.address;
    const gender=req.body.inlineRadioOptions;
    const education=req.body.selectEducation;
    const futureDream=req.body.futureDream;
    const dob=req.body.dob;
    const pincode=req.body.pincode;
    const email=req.body.email;
    console.log(education)
})
app.get('/login',function(req,res){
    res.render('login')
})
app.get('/results',function(req,res){
    res.render('results')
})
app.listen(process.env.PORT, () => 
console.log(`Example app listening on port ${process.env.PORT}!`)
)