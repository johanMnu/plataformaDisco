const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./users")
const albumRouter = require("./album")//importo el contenido del album********
const Router = express.Router();


app.use(express.json());
Router.use('/user', userRouter);
Router.use('/Album', albumRouter);



module.exports = Router;