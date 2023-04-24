import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from "express-session";
import YelpController from './controllers/yelp-controller.js';
import RestaurantsController from './controllers/restaurants-controller.js';
import ReviewsController from './controllers/reviews-controller.js';
import UsersController from "./users/users-controller.js";
import FollowController from "./follow/follow-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/finalproject';
//const MONGOOSE_CONNECT_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false, maxPoolSize: 10, serverSelectionTimeoutMS: 5000, socketTimeoutMS: 45000, family: 4 };
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors(  // configuring cors to support cookies (and restricting network access from React app)
           {
               credentials: true,
               origin: true  // origin: "http://localhost:3000"
           }
    )
);
app.use(
    session(  // configuring session library
        {
            secret: "any string",
            resave: true,
            saveUninitialized: true,
            cookie: {
                secure: false,
                sameSite: "lax"
            }
        }
    )
);
app.use(express.json());  // parse JSON from HTTP request body

YelpController(app);
RestaurantsController(app);
ReviewsController(app);
UsersController(app);
FollowController(app);

app.listen(process.env.PORT || 4000);
