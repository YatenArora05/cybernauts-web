const express=require("express");
const app=express();
// const fileuploader=require("express-fileupload");
const mysql2=require("mysql2");
app.listen(7700,function(req,resp){
    console.log("started the port at 7700");
});
app.use(express.static("public"));

const congObj={
    host:"127.0.0.1",
    user:"root",
    password:"San@1234",
    database:"cybernauts",
}
const mysql=mysql2.createConnection(congObj);
mysql.connect(function(err)
{
    if(err===null)
    console.log("connect to database");
else 
    console.log(err.message);
})
app.get("/",function(req,resp){
    let filepath=process.cwd()+"/public/index.html";
    resp.sendFile(filepath);
 })
 app.get("/riteshhead",function(req,resp){
    let filepath=process.cwd()+"/public/ritesh.html";
    resp.sendFile(filepath);
 })
 app.get("/arvindteam",function(req,resp){
    let filepath=process.cwd()+"/public/arvind.html";
    resp.sendFile(filepath);
 })
 app.get("/saanvivision",function(req,resp){
    let filepath=process.cwd()+"/public/vision.html";
    resp.sendFile(filepath);
 })