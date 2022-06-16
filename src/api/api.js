import axios from 'axios';

export default axios.create({
  baseURL: `https://cafevira.com/api/api/v1/`
});