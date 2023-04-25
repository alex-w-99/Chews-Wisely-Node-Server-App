import mongoose from 'mongoose';
import ratings from './ratings-model.js';

export const updateRating = (rid, rating) => ratings.updateOne({_id: rid},
                                        {$set: rating});
export const createRating = (rating) => ratings.create(rating);
export const findRating = (restId, uId) =>
                    ratings.findOne({restaurantId: restId, userId: uId});