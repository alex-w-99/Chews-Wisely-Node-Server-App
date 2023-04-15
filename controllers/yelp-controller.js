import axios from "axios";

const API_KEY =
'wdVxEWv2GUKA1dG0M1sGpitqc8vVrhhKX4LPXHXiTUcEaH1nBUeP7B_991JvTJ7U8hZGHh35mQMEw9icEELJ_t-7qx6XbQvCc3kTsmgibwvZbJ91xJYvBOK411kyZHYx';
const YELP_API = "https://api.yelp.com/v3/businesses/search?";

const api = axios.create({
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

const getBusinesses = async (req, res) => {
   const search = req.params.query;
   console.log("We're sending this to yelp: "+  YELP_API + search);
   const response = await api.get(YELP_API + search + '');
        const businesses = JSON.stringify(response.data);
   console.log("RESPONSE IS " + businesses);
   res.json(businesses);
}

export default (app) => {
  app.get('/api/yelp/:query', getBusinesses);
}