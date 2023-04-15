import restaurantsModel from './restaurants-model.js';

export const findRestaurants = () => restaurantsModel.find();
export const createRestaurant = () => restaurantsModel.create(restaurant);
export const deleteRestaurant = () => restaurantsModel.deleteOne({_id: rid});
export const updateRestaurant = () => restaurantsModel.updateOne({_id: rid},
                                                    {$set: restaurant});