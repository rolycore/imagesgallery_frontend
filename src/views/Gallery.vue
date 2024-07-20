<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="gallery">
  
    <div class="image-list">
      <image-card
        v-for="image in images"
        :key="image.id"
        :image="image"
        @view-image="openModal"
      />
    </div>
    <image-modal
      v-if="selectedImage"
      :image="selectedImage"
      :visible="isModalVisible"
      @close-modal="closeModal"
    />
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue';

import ImageModal from '../components/ImageModal.vue';
import { getImages } from '../api';

export default {
  components: {
    ImageCard,

    ImageModal,
  },
  data() {
    return {
      images: [],
      selectedImage: null,
      isModalVisible: false,
    };
  },
  methods: {
    async fetchImages() {
      const response = await getImages();
      this.images = response.data;
    },
    openModal(image) {
      this.selectedImage = image;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedImage = null;
    },
  },
  created() {
    this.fetchImages();
  },
};
</script>

<style scoped>
.gallery {
  padding: 20px;
}
.image-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>