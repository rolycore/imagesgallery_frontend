<template>
    <div class="image-card">
      <img :src="image.image" alt="Image"  @click="viewImage"/>
      <button class="view-btn" @click="viewImage">Ver</button>
      <h3>{{ image.title }}</h3>
      <p>{{ image.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        image: {
      type: Object,
      required: true,
    },
    },
  methods: {
    viewImage() {
      this.$emit('view-image', this.image);
    },
  },
  };
  </script>
  
  <style scoped>
  .image-card {
    width: 25%;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    margin: 10px;
    text-align: center;
    box-sizing: border-box;
  }
  .image-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}
.view-btn{
    background-color: #42b983;
}
  </style>
  