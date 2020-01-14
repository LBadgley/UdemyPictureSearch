import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID 17400cfee6736fe0dded86f931f6225447e7d0a8daa0778e090dfc0bc1d171a0"
  }
});
