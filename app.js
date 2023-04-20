import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import YelpController from './controllers/yelp-controller.js';
import RestaurantsController from './controllers/restaurants-controller.js';
import ReviewsController from './controllers/reviews-controller.js';
import UsersController from "./users/users-controller.js";

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/finalproject'; // || process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

mongoose.connect('mongodb+srv://melaniegilbertbecker:restaurantz@finalprojectdata.ydag8og.mongodb.net/?retryWrites=true&w=majority');
const app = express();
app.use(
    session(  // configuring session library
        {
            secret: "any string",
            resave: false,
            saveUninitialized: true,
        }
    )
);
app.use(
    cors(  // configuring cors to support cookies (and restricting network access from React app)
        {
            credentials: true,
            origin: "http://localhost:3000"
        }
    )
);
app.use(express.json());  // parse JSON from HTTP request body

YelpController(app);
RestaurantsController(app);
ReviewsController(app);
UsersController(app);
app.listen(process.env.PORT || 4000);
