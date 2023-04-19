import mongoose from 'mongoose';
import reviewSchema from './reviews-schema.js';

const reviewsModel = mongoose.model('ReviewsModel', reviewSchema);
export default reviewsModel;

