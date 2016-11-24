import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'

//import  TodoList from './todolist'

import  EchartsMaps from './components/echartMap.vue'
import  ecomomyMap from './components/economyMap.vue'
import  innovateIndustry from './components/innovateIndustry.vue'
import  lifeExpectancy from './components/lifeExpectancy.vue'
import  mapArea from './components/mapArea.vue'
import  autoPaly from './components/autoPaly.vue'
import  AnscombeQuartet from './components/AnscombeQuartet.vue'

import  CrossBar from './components/CrossBar.vue'
import  StackBar from './components/StackBar.vue'

 

Vue.use(MintUI)
Vue.use(VueRouter)


const Home = { template:'<div>This is Home</div>' }
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div></div>' }



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'recruit', component: EchartsMaps },
    { path: '/economy', name: 'economy', component: ecomomyMap },
    { path: '/lifeExpectancy', name: 'lifeExpectancy', component: lifeExpectancy },
    { path: '/innovateIndustry', name: 'innovateIndustry', component: innovateIndustry },
    { path: '/autoPaly', name: 'autoPaly', component: autoPaly },
    { path: '/AnscombeQuartet', name: 'AnscombeQuartet', component: AnscombeQuartet },
    { path: '/mapArea', name: 'mapArea', component: mapArea },
    { path: '/CrossBar', name: 'CrossBar', component: CrossBar },
    { path: '/StackBar', name: 'StackBar', component: StackBar },




  ]
})

//测试Miti UI 使用
new Vue({
  el: '#app',
  //这里render的只是一个组件而已 传啥就渲染啥
  render: h => h(App)
})

//测试todo 使用
// new Vue({
//   el: '#app2',
//   //这里render的只是一个组件而已 传啥就渲染啥
//   render: h => h(TodoList)
// })

//测试 echart
// new Vue({
//   el: '#map',
//   //这里render的只是一个组件而已 传啥就渲染啥
//   render: h => h(EchartsMaps)
// })

new Vue({
  router,
  template: `
    <div class="routeArea">
      <h1>区域和产业指数</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name:'recruit'}">直方图</router-link></li>
        <li><router-link :to="{ name: 'CrossBar'}">CrossBar</router-link></li>
        <li><router-link :to="{ name: 'StackBar'}">StackBar</router-link></li>

        <li><router-link :to="{ name:'economy'}">南丁格尔图</router-link></li>
        <li><router-link :to="{ name: 'lifeExpectancy'}">时间轴-散点图</router-link></li>
        <li><router-link :to="{ name: 'innovateIndustry'}">创新指数-区域-行业-最近十年  </router-link></li>
        <li><router-link :to="{ name: 'autoPaly'}">autoPaly</router-link></li>
        <li><router-link :to="{ name: 'AnscombeQuartet'}">AnscombeQuartet</router-link></li>
        <li><router-link :to="{ name: 'mapArea'}">mapArea</router-link></li>


      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#route')

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
