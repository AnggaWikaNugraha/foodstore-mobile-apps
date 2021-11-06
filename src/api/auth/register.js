import {API_HOST} from '../../config';
import axios from 'axios';

export function postItem(item) {
  return axios.post(`${API_HOST.url}/auth/register`, item, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}