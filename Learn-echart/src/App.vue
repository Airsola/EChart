<template >
  <div id="app">
    <img src="./assets/logo.png">
    <p>点击我，我会消失。</p>
    <h1>{{ msg }}</h1>
    <mt-button @click.native="startHacking">Let's do it</mt-button>
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

  mounted:function (){

// 测试AJAX是否生效
 $("p").click(function(){
    $(this).hide();
  });

  }

}


</script>

<style>

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.routeArea{
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
