import mongoose from 'mongoose';

const schema = mongoose.Schema({
    restaurantId: String,
    userId: String,
    isCritic: Boolean,
    score: Number
},
{ collection: 'ratings'});
export default schema;