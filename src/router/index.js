import { createRouter, createWebHistory } from 'vue-router';
import Gallery from '../views/Gallery.vue';
import ImageUploadView from '../views/ImageUploadView.vue';
const routes = [
  {
    path: '/',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/upload',
    name: 'upload',
    component: ImageUploadView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
