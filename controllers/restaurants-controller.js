import * as restaurantsDao
        from '../restaurants/restaurants-dao.js';

const createRestaurant = async (req, res) => {
  const newRestaurant = req.body;
  const inserted = await restaurantsDao
                           .createRestaurant(newRestaurant);
  res.json(inserted);
}

const findRestaurants = async (req, res) => {
  const restaurants = await restaurantsDao.findRestaurants();
  res.json(restaurants);
}

const updateRestaurant = async (req, res) => {
  const updateId = req.params.rid;
  const updates = req.body;
  const status = await restaurantsDao
                          .updateRestaurant(updateId, udpates);
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
  app.get('/api/restaurants', findRestaurants);
  app.put('/api/restaurants/:rid', updateRestaurant);
  app.delete('/api/restaurants/:rid', deleteRestaurant);
}