<template>
  <div id="app">
    <!--<my-header :seller="seller"></my-header>-->
    <h2>区域和产业指数</h2>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{ name: 'Economy'}">经济指数</router-link>
       </div>
      <div class="tab-item">
        <router-link :to="{ name: 'Industry'}">产业指数</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'Innovate'}">创新指数</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{ name: 'StartUp'}">创业指数</router-link>
      </div>
      <div class="tab-item">
      <router-link :to="{ name: 'Recruit'}">招聘指数</router-link>
    </div>
    </div>

       <router-view ></router-view>
   </div>
</template>


<script>

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods: {

    },

    mounted: function () {

    }

  }


</script>

<style>

  .tab {
    display: flex;
    width: 100%;
    height: 40px;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .routeArea {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    text-decoration: none;

  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-decoration: none;

  }

  li {
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;

  }

  a {
    color: #42b983;
    text-decoration: none;

  }

</style>
