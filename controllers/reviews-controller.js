import * as reviewsDao
        from '../restaurants/reviews/reviews-dao.js';
import * as restaurantsDao
        from '../restaurants/restaurants-dao.js';

const createReview = async (req, res) => {
  const review = req.body;
  const inserted = await reviewsDao
                            .createReview(newReview);
  res.json(inserted);
}

const findReviews = async (req, res) => {
  const restaurantId = req.params;
  const reviews = await reviewsDao.findReviews(restaurantId);
  res.json(reviews);
}

const deleteReview = async (req, res) => {
  const revId = req.params;
  const status = await reviewsDao.deleteReview(revId);
  res.json(status);
}

const updateReview = async (req, res) => {
  const revId = req.params;
  const updates = req.body;
  const status = reviewsDao.updateReview(revId, updates);
  res.json(status);
}

export default (app) => {
  app.post('api/restaurants/reviews/', createReview);
  app.get('api/restaurants/reviews/:restaurantId', findReviews);
  app.delete('api/restaurants/reviews/:revId', deleteReview);
  app.put('api/restaurants/reviews/:revId', updateReview);
}