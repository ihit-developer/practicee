const express = require("express");
const app = express();

let Languages=['C#','C++','C','Python'];
let Employee=[
    {'Name':'Ali','Department':'CS','Status':'permanent'},
    {'Name':'Ahmad','Department':'SE','Status':'Contract'},
    {'Name':'Abbas','Department':'AI','Status':'permanent'}
]

app.get("/",function(req,res){
    res.send("At home Route");
});
 
app.get("/Std", function(req,res){
    res.send("Student Route");
});

app.get("/Days",function(req,res){
    let days= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    days.forEach(element =>{
        console.log(element);
    });
})

app.get("/Langs",function(req,res){
    res.render("Languages.ejs",{data:Languages});
});

app.get("/Employee",function(req,res){
    res.render("employee.ejs",{data:Employee});
})

app.listen("2345",process.env.IP,function(){

    console.log("server is listening....");
});

