<template>
    <div class="upload-view">
      <h1>Upload Image</h1>
      <image-uploader @image-uploaded="handleImageUploaded" />
    </div>
  </template>
  
  <script>
  import ImageUploader from '../components/ImageUploader.vue';
  
  export default {
    components: {
      ImageUploader,
    },
    methods: {
      handleImageUploaded() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .upload-view {
    padding: 20px;
  }
  </style>
  