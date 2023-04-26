import mongoose from 'mongoose';
import reviews from './reviews-model.js';

export const updateReview = (revId, review) => reviews.updateOne({_id: revId},
                                        {$set: review});
export const deleteReview = (revId) => reviews.deleteOne({_id: revId});
export const createReview = (review) => reviews.create(review);
export const findByRestaurant = (rid) => reviews.find({restaurantId: rid});
export const findByUser = (uid) => reviews.find({userId: uid});
/* for testing */
export const deleteAll = () => reviews.deleteMany({_id: { $ne: -1 }});