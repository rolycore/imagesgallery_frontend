<template>
  <div id="app">
    <header>
      <img alt="SST logo" src="@/assets/LOGO-SHALOM.png">
      <h1>Image Gallery</h1>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/upload">Upload Image</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Estilos globales */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}

header {
  background: #42b983;
  color: white;
  padding: 20px 0;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>
