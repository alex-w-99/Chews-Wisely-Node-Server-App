import axios from "axios";

//const YELP_API = "https://api.yelp.com/v3/businesses/search?";
const YELP_API = "https://api.yelp.com/v3/businesses/";
const API_KEY = "wdVxEWv2GUKA1dG0M1sGpitqc8vVrhhKX4LPXHXiTUcEaH1nBUeP7B_991JvTJ7U8hZGHh35mQMEw9icEELJ_t-7qx6XbQvCc3kTsmgibwvZbJ91xJYvBOK411kyZHYx";

const api = axios.create({
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

const getOneBusiness = async (req, res) => {
   const yelpId = req.params.id;
   const response = await api.get(YELP_API + yelpId + '');
   const business = JSON.stringify(response.data);
   res.json(business);
}

const getBusinesses = async (req, res) => {
   const search = req.params.query;
   const response = await api.get(YELP_API + "search?" + search + '');
   const businesses = JSON.stringify(response.data);
   console.log("returning " + JSON.stringify(businesses));
   res.json(businesses);
}

export default (app) => {
  app.get('/api/yelp/one/:id', getOneBusiness);
  app.get('/api/yelp/:query', getBusinesses);
}