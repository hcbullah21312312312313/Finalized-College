const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://admin:p5W5Rvr28zzQAhWE@cluster0.bp2y7j1.mongodb.net/College', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>
console.log('Connected to the database'))
const StudentsSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    fathername:String,
    mothername:String,
    email:String,
    phone:String,
    address:String,
    education:String,
    education:String,
    gender:String,
    courses:String,
    collegeid:String
})
module.exports=mongoose.model('students',StudentsSchema)
