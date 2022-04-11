<template>
  <router-view/>
</template>

<script>
export default {
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Rubik Moonrocks', cursive;

}
body{
  margin: 0;
  padding: 0;
  background: #fff;
  font-family: 'Roboto', sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
