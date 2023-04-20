import mongoose from 'mongoose';
import reviews from './reviews-model.js';

export const updateReview = (revId, review) => reviews.updateOne({_id: revId},
                                        {$set: review});
export const deleteReview = (revId) => reviews.deleteOne({_id: revId});
export const createReview = (review) => reviews.create(review);
export const findReviews = (rid) => reviews.find({restaurantId: rid});