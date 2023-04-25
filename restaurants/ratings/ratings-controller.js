import * as ratingsDao
        from './ratings-dao.js';

const createRating = async (req, res) => {
  const rating = req.body;
  const inserted = await ratingsDao
                            .createRating(review);
  res.json(inserted);
}

const findRating = async (req, res) => {
  const restId = req.params.restId
  const uId = req.params.uId
  const rating = await ratingsDao.findRating(restId, uId);
  res.json(rating);
}

const updateRating = async (req, res) => {
  const rid = req.params.rid;
  const updates = req.body;
  const status = await ratingsDao.updateRating(rid, updates);
  res.json(status);
}

export default (app) => {
  app.post('/api/restaurants/ratings', createRating);
  app.get('/api/restaurants/ratings/:restId/:uId', findRating);
  app.put('/api/restaurants/ratings/:rid', updateRating);
}