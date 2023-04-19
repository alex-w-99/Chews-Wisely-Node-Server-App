import mongoose from 'mongoose';
import reviews from './reviews-model.js';

export const updateReview = (revId, updates) => reviews.updateOne({_id: revId},
                                        {$set, updates});
export const deleteReview = (revId) => reviews.deleteOne({_id: revId});
export const createReview = (review) => reviews.create(review);
export const findReviews = (rid) => reviews.find({restaurantId: rid});