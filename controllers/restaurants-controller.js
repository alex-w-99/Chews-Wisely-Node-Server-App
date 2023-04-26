import * as restaurantsDao
        from '../restaurants/restaurants-dao.js';

const createRestaurant = async (req, res) => {
  const newRestaurant = req.body;
  console.log("CREATING RESTAURANT ENTRY from " + JSON.stringify(newRestaurant));
  const inserted = await restaurantsDao
                           .createRestaurant(newRestaurant);
  console.log("It looks like this: " + JSON.stringify(inserted));
  res.json(inserted);
}

const findAll = async (req, res) => {
  const restaurants = await restaurantsDao.findAll();
  res.json(restaurants);
}

const findWithYelp = async (req, res) => {
  console.log("GOING TO FIND WITH YELP");
  const targetId = req.params.yid;
  const restaurants = await restaurantsDao.findByYelp(targetId);
  res.json(restaurants);
}

const findWithId = async (req, res) => {
   const targetId = req.params.rid;
   const restaurants = await restaurantsDao.findById(rid);
   res.json(restaurants);
 }

const updateRestaurant = async (req, res) => {
  const updateId = req.params.rid;
  const updates = req.body;
  const status = await restaurantsDao
                          .updateRestaurant(updateId, updates);
  res.json(status);
}

const deleteRestaurant = async (req, res) => {
  const id = req.params.rid;
  const status = await restaurantsDao
                          .deleteRestaurant(id);
  res.json(status);
}

export default (app) => {
  app.post('/api/restaurants', createRestaurant);
  app.get('/api/restaurants', findAll);
  app.get('/api/restaurants/yelp/:yid', findWithYelp);
  app.get('/api/restaurants/:rid', findWithId);
  app.put('/api/restaurants/:rid', updateRestaurant);
  app.delete('/api/restaurants/:rid', deleteRestaurant);
}