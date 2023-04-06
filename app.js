import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";

import HelloController from "./controllers/hello-controller.js"
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const DB_CONNECTION_STRING
    = `mongodb+srv://iShivam:MongoDB8@cluster-tuiter.jdgh9yh.mongodb.net/tuiter?retryWrites=true&w=majority`;

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter'

//console.log("DB Connection String Value: " + CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING)
    .then(function() {console.log("Successfully connected to Mongo DB Atlas!")})
    .catch(function() {console.log("Failed to connect to Mongo DB!")});
//mongoose.connect('mongodb://127.0.0.1:27017/tuiter')

const app = express()
app.use(cors())
app.use(express.json())

TuitsController(app)
HelloController(app)
UsersController(app)

app.listen(process.env.PORT || 4000)