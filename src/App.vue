<template>
  <div id="app">
    <MyHeader/>
    <router-view/>
    <MyFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyFooter from '@/components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'HomeView',
  components: {
    MyFooter,
    MyHeader
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
