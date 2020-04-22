import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer SpsCrKLMBGHfZz7jlhNWQ6dQMsyb9DMQvDYrKHyvWloWVu72eBH9aZEVnC2tiRe6dZKiuDlrT4CPY5kXBYMA9WaoPSPeJXHGE8zOM5o2RHU98Lh1XwQDIRTJabF_XnYx'
    }
    // baseURL: 'https://jsonplaceholder.typicode.com',
});