import * as reviewsDao
        from '../restaurants/reviews/reviews-dao.js';
import * as restaurantsDao
        from '../restaurants/restaurants-dao.js';

const createReview = async (req, res) => {
  const review = req.body;
  const inserted = await reviewsDao
                            .createReview(review);
  console.log("Returning: " + JSON.stringify(inserted));
  res.json(inserted);
}

const findReviews = async (req, res) => {
  const rid = req.params.restaurantId
  const reviews = await reviewsDao.findReviews(rid);
  console.log("HERE ARE OUR REVIEWS: " + JSON.stringify(reviews));
  res.json(reviews);
}

const deleteReview = async (req, res) => {
  console.log("fuck this review in particular");
  const revId = req.params.revId;
  console.log("here's the ID " + JSON.stringify(revId));
  const status = await reviewsDao.deleteReview(revId);
  res.json(status);
}

const updateReview = async (req, res) => {
  const revId = req.params.revId;
  const updates = req.body;
  console.log("MAKING THESE UPDATES: " + JSON.stringify(updates));
  const status = await reviewsDao.updateReview(revId, updates);
  res.json(status);
}

export default (app) => {
  app.post('/api/restaurants/reviews', createReview);
  app.get('/api/restaurants/reviews/:restaurantId', findReviews);
  app.delete('/api/restaurants/reviews/:revId', deleteReview);
  app.put('/api/restaurants/reviews/:revId', updateReview);
}