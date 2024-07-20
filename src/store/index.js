import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    images: [],
    uploadStatus: '',
  },
  mutations: {
    SET_IMAGES(state, images) {
      state.images = images;
    },
    ADD_IMAGE(state, image) {
      state.images.push(image);
    },
    SET_UPLOAD_STATUS(state, status) {
      state.uploadStatus = status;
    },
  },
  actions: {
    async fetchImages({ commit }) {
      try {
        const response = await axios.get('http://localhost:8000/api/images/');
        commit('SET_IMAGES', response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    },
    async uploadImage({ commit }, formData) {
      commit('SET_UPLOAD_STATUS', 'uploading');
      try {
        const response = await axios.post('http://localhost:8000/api/images/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        commit('ADD_IMAGE', response.data);
        commit('SET_UPLOAD_STATUS', 'success');
      } catch (error) {
        console.error('Error uploading image:', error);
        commit('SET_UPLOAD_STATUS', 'error');
      }
    },
  },
  getters: {
    allImages: (state) => state.images,
    uploadStatus: (state) => state.uploadStatus,
  },
});
