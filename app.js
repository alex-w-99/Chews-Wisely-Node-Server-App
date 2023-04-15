import express from "express";
import cors from "cors";
import YelpController from "./controllers/yelp-controller.js";
import RestaurantsController from "./controllers/restaurants-controller.js";

const app = express();
app.use(cors());
app.use(express.json());  // parse JSON from HTTP request body

YelpController(app);
RestaurantsController(app);
app.listen(process.env.PORT || 4000);
