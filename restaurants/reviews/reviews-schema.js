import mongoose from 'mongoose';

const schema = mongoose.Schema({
    restaurantId: String,
    userId: String,
    userName: String,
    userImage: String,
    isCritic: {
      type: Boolean,
      default: false
    },
    liked: {
      type: Boolean,
      default: false
    },
    disliked: {
      type: Boolean,
      default: false
    },
    likes: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    text: String
},
{ timestamps: true },
{ collection: 'reviews'});
export default schema;