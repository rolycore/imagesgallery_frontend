import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export function getImages() {
  return apiClient.get('/api/images/');
}

export function uploadImage(formData) {
  return apiClient.post('/api/images/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
