<template>
    <div class="modal-overlay" v-if="visible" @click.self="closeModal">
      <div class="modal-content">
        <img :src="image.image" alt="Image" />
        <h3>{{ image.title }}</h3>
        <p>{{ image.description }}</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageModal',
    props: {
      image: {
        type: Object,
        required: true,
      },
      visible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    max-width: 80%; /* Adjust width as needed */
    max-height: 80%; /* Adjust height as needed */
    overflow: auto; /* Add scrollbars if content overflows */
  }
  
  .modal-content img {
    max-width: 100%;
    max-height: 60vh; /* Adjust height to be responsive */
    height: auto;
    border-radius: 8px;
  }
  
  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #42b983;
    color: white;
  }
  </style>
  