<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="from-group">
      <label>{{ msg }}</label>
      <input type="text" class="from-control" v-model="msg">
      <button class="btn btn-success btn-sm" >测试</button>
    </div>
    <Hello @countData="getData"></Hello>
    <World ></World>
  </div>
</template>

<script>
  import Hello from './Hello.vue'
  import World from './World.vue'
  export default {
      components : { Hello,World },
      name: 'app',
      data () {
          return {
            msg: 'Welcome to Your Vue.js App'
          }
      },
      methods : {
          getData (data) {
              this.msg = data;
              console.log(data)
          }
      }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
