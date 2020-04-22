import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (term) => {
        try{
            const res = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose',
                }
            });
            // console.log(res.data);
            setResults(res.data.businesses);
        } catch(err){
            setErrMsg('Something went Wrong...');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errMsg];
}