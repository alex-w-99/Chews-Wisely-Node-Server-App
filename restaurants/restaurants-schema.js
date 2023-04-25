import mongoose from 'mongoose';

const schema = mongoose.Schema({
  image_url: String,
  name: String,
  username: {
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  yelpId: String,
  rating: {
    type: Number,
    default: -1
  },
  userRating: {
    type: Number,
    default: -1
  },
  criticRating: {
    type: Number,
    default: -1
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  criticRatingCount: {
    type: Number,
    default: 0
  },
  userRatingCount: {
      type: Number,
      default: 0
  },
  website: {
    type: String,
    default: ""
  },
  address: {
    type: String,
    default: ""
},
  city: String,
  state: String,
  country: String,
  phone: {
    type: String,
    default: ""
}
}, {collection: 'restaurants'});
export default schema;