import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from "express-session";
import crypto from "crypto";
import YelpController from './controllers/yelp-controller.js';
import RestaurantsController from './controllers/restaurants-controller.js';
import RatingsController from './restaurants/ratings/ratings-controller.js'
import ReviewsController from './controllers/reviews-controller.js';
import UsersController from "./users/users-controller.js";
import FollowController from "./follow/follow-controller.js";

// Set "production" to true if running on servers; set to false if running on localhost:
const production = true;

// Connecting to MongoDB:
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/finalproject';
const MONGOOSE_CONNECT_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,        // do not build indexes
    maxPoolSize: 10,         // maintain up to 10 socket connections
    socketTimeoutMS: 45000,  // close sockets after 45 seconds of inactivity
    family: 4                // use IPv4, skip trying IPv6
}
mongoose.connect(CONNECTION_STRING, MONGOOSE_CONNECT_OPTIONS);

// Configuring cors to support cookies (and restricting network access from React app):
const app = express();
app.use(
    cors(
        {
            credentials: true,
            origin: true
        }
    )
);

// Configuring session library:
if (production) {
    app.set("trust proxy", 1);
}
const secret = crypto.randomBytes(32).toString("hex");
let sess = {
    secret: secret,
    saveUninitialized: true,
    resave: true,
    cookie: {
        sameSite: production ? "none" : "lax",
        secure: production  // needs HTTPS
    }
};
app.use(session(sess));

// Parse JSON from HTTP request body:
app.use(express.json());

YelpController(app);
RestaurantsController(app);
RatingsController(app);
ReviewsController(app);
UsersController(app);
FollowController(app);

app.listen(process.env.PORT || 4000);