import axios from "axios";

const API_KEY =
'COPY PASTE KEY HERE';
const YELP_API = "https://api.yelp.com/v3/businesses/search?";

const api = axios.create({
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }
})

const getBusinesses = async (req, res) => {
   const response = await api.get('https://api.yelp.com/v3/businesses/search?location=Boston');
        const businesses = JSON.stringify(response.data);
   res.json(businesses);
}

export default (app) => {
  app.get('/api/yelp', getBusinesses);
}