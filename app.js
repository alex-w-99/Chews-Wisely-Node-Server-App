import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UsersController from "./users/users-controller.js";
//import YelpController from "./controllers/yelp-controller.js";

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/finalproject'; // || process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());  // parse JSON from HTTP request body

//YelpController(app);
UsersController(app);

app.listen(process.env.PORT || 4000);
