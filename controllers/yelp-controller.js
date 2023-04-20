import axios from "axios";

const YELP_API = "https://api.yelp.com/v3/businesses/";
const API_KEY = 'COPY PASTE KEY HERE';
const YELP_API = "https://api.yelp.com/v3/businesses/search?";

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