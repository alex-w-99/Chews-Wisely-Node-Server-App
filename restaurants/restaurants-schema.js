import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    userId: String,
    likes: Number,
    dislikes: Number,
    text: String,
});

const schema = mongoose.Schema({
  image: String,
  name: String,
  username: String,
  password: String,
  yelpId: String,
  reviewCount: {
    type: Number,
    default: 0
  },
  reviews: {
    type: [reviewSchema],
    default: []
  },
  menu: String,
  website: {
    type: string,
    default: null
  },
  address: String,
  phone: String,

}, {collection: 'restaurants'});
export default schema;