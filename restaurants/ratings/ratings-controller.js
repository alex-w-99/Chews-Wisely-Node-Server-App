import * as ratingsDao
        from './ratings-dao.js';

const createRating = async (req, res) => {
  console.log("Going to create rating")
  const rating = req.body;
  const inserted = await ratingsDao
                            .createRating(rating);
  console.log("CREATED THIS RATING: " + JSON.stringify(inserted));
  res.json(inserted);
}

const findRating = async (req, res) => {
  const restId = req.params.restId
  const uId = req.params.uId
  console.log("RESTID IS " + restId)
  console.log("uId IS " + uId);
  const rating = await ratingsDao.findRating(restId, uId);
  console.log("Found a rating: " + JSON.stringify(rating))
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