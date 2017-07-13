<template>
  <div id="app">
    <my-head></my-head>
    <img src="./assets/logo.png">
    <div class="from-group">
      <label>{{ msg }}</label>
      <input type="text" class="from-control" v-model="msg">
      <button class="btn btn-success btn-sm" >测试</button>
    </div>
    <Hello @countData="getData" :msMsg="msg"></Hello>
    <World ></World>
    <my-table :tableDatae="table"></my-table>
  </div>
</template>

<script>
  import Hello from './Hello.vue'
  import World from './World.vue'
  import myTable from './vueTable.vue'
  import myHead from  './head.vue'
  export default {
      components : { Hello,World,myTable,myHead },
      name: 'app',
      data () {
          return {
              msg: 'Welcome to Your Vue.js App',
              table : [
                  {name :'beijin',city : '北京',code : '010'},
                  {name :'wuhan',city : '武汉',code : '027'},
                  {name :'shanghai',city : '上海',code : '020'},
              ]
          }
      },
      methods : {
          getData (data) {
              this.msg = data;
              console.log(data)
          }
      },
      computed: {

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
