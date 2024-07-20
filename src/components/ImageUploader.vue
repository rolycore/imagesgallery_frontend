<template>
    <div class="image-uploader">
      <h2>Details Image</h2>
      <div class="form-group">
        <label for="title">Title:</label>
        <input type="text" v-model="image.title" id="title" placeholder="title" required>
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <input type="text" v-model="image.description" id="description" placeholder="description" required>
      </div>
      <div class="form-group">
        <label for="file">Imagen:</label>
        <input type="file" @change="handleFileChange" required />
      </div>
      <button class="btn-submit" @click="uploadImage">Upload Image</button>
    </div>
  </template>
  
  <script>
  import { uploadImage } from '../api';
  
  export default {
    name: 'UploadImage',
    data() {
      return {
        image: {
          title: '',
          description: '',
          file: null,
        },
      };
    },
    methods: {
      handleFileChange(event) {
        this.image.file = event.target.files[0];
      },
      async uploadImage() {
        if (this.image.file) {
          const formData = new FormData();
          formData.append('title', this.image.title);
          formData.append('description', this.image.description);
          formData.append('image', this.image.file);
  
          try {
            await uploadImage(formData);
            this.$emit('image-uploaded');
          } catch (error) {
            console.error(error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  .image-uploader {
    margin: 20px;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  input:focus {
    border-color: #007bff;
    outline: none;
  }
  .btn-submit {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .btn-submit:hover {
    background-color: #0056b3;
  }
  </style>
  