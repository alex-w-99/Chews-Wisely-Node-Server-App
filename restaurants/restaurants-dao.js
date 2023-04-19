import restaurantsModel from './restaurants-model.js';

export const findByYelp = (yid) => restaurantsModel.find({yelpId: yid});
export const findById = (rid) => restaurantsModel.find({_id: rid});
export const createRestaurant = (restaurant) => restaurantsModel.create(restaurant);
export const deleteRestaurant = (rid) => restaurantsModel.deleteOne({_id: rid});
export const updateRestaurant = (rid, restaurant) => restaurantsModel.updateOne({_id: rid},
                                                    {$set: restaurant});