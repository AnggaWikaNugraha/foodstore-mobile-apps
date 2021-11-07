import {API_HOST} from '../../config';
import axios from 'axios';

export function getItems(token) {
  return axios.get(`${API_HOST.url}/api/products`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}