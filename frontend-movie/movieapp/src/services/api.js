import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Authorization': 'Bearer YOUR_GITHUB_TOKEN',
        'Content-Type': 'application/json',
        }
})

export default api;