import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import YelpController from './controllers/yelp-controller.js';
import RestaurantsController from './controllers/restaurants-controller.js';
import ReviewsController from './controllers/reviews-controller.js';

mongoose.connect('mongodb+srv://melaniegilbertbecker:restaurantz@finalprojectdata.ydag8og.mongodb.net/?retryWrites=true&w=majority');
const app = express();
app.use(cors());
app.use(express.json());  // parse JSON from HTTP request body

YelpController(app);
RestaurantsController(app);
ReviewsController(app);
app.listen(process.env.PORT || 4000);
