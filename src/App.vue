<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body, html {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}
input,textarea {
  outline: none;
  border: none;
}
ul,li,ol,p,div {
  margin: 0;
  padding: 0;
}
div,ul,li,a {
  /* display: flex; */
}
.ellipsis {
  white-space: nowrap; 
  text-overflow:ellipsis; 
  overflow:hidden; 
}

</style>
