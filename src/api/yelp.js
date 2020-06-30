import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer YOUR_SECRET_KEY'
    }
    // baseURL: 'https://jsonplaceholder.typicode.com',
});
