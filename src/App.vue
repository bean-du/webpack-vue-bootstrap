<template>
  <div id="app">
    <div class="container">
      <my-head></my-head>
      <div class="container theme-showcase">
      <banner></banner>
      </div>
      <div class="col-md-4">
        <left-list></left-list>
      </div><div class="col-md-8">
        <list-right></list-right>
      </div>
    </div>
  </div>
</template>

<script>
  import myHead from  './head.vue'
  import banner from './banner.vue'
  import leftList from  './leftPage.vue'
  import listRight from  './listRight.vue'
  export default {
      components : { myHead,banner,leftList,listRight },
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
