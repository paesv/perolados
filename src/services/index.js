import axios from 'axios'

let apiURL = ''

const client = axios.create({
  baseURL: this.apiURL,
  timeout: 1000,
});

export default client