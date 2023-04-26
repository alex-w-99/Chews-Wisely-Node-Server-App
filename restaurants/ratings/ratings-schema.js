import mongoose from 'mongoose';

const schema = mongoose.Schema({
    restaurantId: String,
    userId: String,
    isCritic: Boolean,
    score: String
},
{ collection: 'reviews'});
export default schema;