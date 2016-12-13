<template>

  <div id="app">
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
      startHacking () {
        this.$toast('It Works!')
      }
    },

    mounted: function () {
// 测试AJAX是否生效
      $("p").click(function () {
        $(this).hide();
      });

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
