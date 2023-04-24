import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from "express-session";
import YelpController from './controllers/yelp-controller.js';
import RestaurantsController from './controllers/restaurants-controller.js';
import ReviewsController from './controllers/reviews-controller.js';
import UsersController from "./users/users-controller.js";
import FollowController from "./follow/follow-controller.js";

// Connecting to MongoDB:
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/finalproject';
const MONGOOSE_CONNECT_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}
mongoose.connect(CONNECTION_STRING, MONGOOSE_CONNECT_OPTIONS);

// Configuring cors to support cookies (and restricting network access from React app):
const app = express();
app.use(
    cors(
           {
               credentials: true,
               origin: true  // origin: "http://localhost:3000"
           }
    )
);

// Configuring session library:
app.set("trust proxy", 1);
let sess = {
    secret: "any string", // process.env.SECRET
    saveUninitialized: true,
    resave: true,
    cookie: {
        sameSite: "none",
        secure: true  // needs HTTPS
    }
};
app.use(session(sess));

// Parse JSON from HTTP request body:
app.use(express.json());

YelpController(app);
RestaurantsController(app);
ReviewsController(app);
UsersController(app);
FollowController(app);

app.listen(process.env.PORT || 4000);
