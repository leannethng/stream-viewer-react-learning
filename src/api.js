import axios from 'axios'

let API_KEY = `${process.env.REACT_APP_API_KEY}`
let api = axios.create({
  headers: {
    "Client-ID": API_KEY
  }
});

export default api;
