<template>
  <div id="app">
    <div class="container">
      <div class="header clearfix">
      <my-head></my-head>
      </div>
      <div class="container theme-showcase">
      <banner></banner>
      </div>
    </div>
  </div>
</template>

<script>
  import Hello from './Hello.vue'
  import World from './World.vue'
  import myTable from './vueTable.vue'
  import myHead from  './head.vue'
  import todoList from  './todoList.vue'
  import todoInput from './toduInput.vue'
  import banner from './banner.vue'
  export default {
      components : { Hello,World,myTable,myHead,todoList,todoInput,banner },
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
          },
      },
      computed: {
          storeMsg (){
              return this.$store.state.message
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
