const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
const routes = require("./routes/index");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb+srv://johanboca:Juancruz1@cluster0.bfxqi8m.mongodb.net/Proyecto?retryWrites=true&w=majority&appName=Cluster0")
.then(function(db){
    console.log("-- Conectado a MongoDB")
})
.catch(function(err){
    console.log(err)
});


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/', routes)






app.listen(PORT,()=>{
    console.log("Iniciado server en puerto 5000");
})