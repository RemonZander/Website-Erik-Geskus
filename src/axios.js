import axios from 'axios';

const request = axios.create({
    baseURL: 'https://developers.google.com/apis-explorer/#p/youtube/v3',
    headers: {
        'Content-Type': 'application/json',
        "accept": "application/json"
    }
});
export default request;