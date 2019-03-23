import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID INSERT_UNSPLASH_ACCESS_KEY'
  }
});