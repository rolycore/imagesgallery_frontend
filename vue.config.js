const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   devServer: {
    proxy: 'http://localhost:8000' // Asegúrate de que la URL del backend sea correcta
  }
})
