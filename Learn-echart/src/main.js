import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'

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
import  mapAreaSelect from './components/mapAreaSelect.vue'
import  mapDeep from './components/mapDeep.vue'
import  Concentriccircles from './components/Concentriccircles.vue'
//招聘指数
import  RecruitIndustry  from './components/RecruitIndustry.vue'
// 经济指数
import EconomyAreaGDPIndex from './components/EconomyIndex/economyAreaGDPIndex.vue'

import ProvinceGDPTendency from './components/Tendency/ProvinceGDPTendency.vue'

//创业指数
import StartupIndexAreaIndustry from './components/StartUpIndex/StartupIndexAreaIndustry.vue'


Vue.use(MintUI)
Vue.use(VueRouter)
Vue.use(VueResource)


const Home = {template: '<div>This is Home</div>'}
const Foo = {template: '<div>This is Foo</div>'}
const Bar = {template: '<div></div>'}


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', name: 'recruit', component: EchartsMaps},
    {path: '/economy', name: 'economy', component: ecomomyMap},
    {path: '/lifeExpectancy', name: 'lifeExpectancy', component: lifeExpectancy},
    {path: '/innovateIndustry', name: 'innovateIndustry', component: innovateIndustry},
    {path: '/autoPaly', name: 'autoPaly', component: autoPaly},
    {path: '/AnscombeQuartet', name: 'AnscombeQuartet', component: AnscombeQuartet},
    {path: '/mapArea', name: 'mapArea', component: mapArea},
    {path: '/CrossBar', name: 'CrossBar', component: CrossBar},
    {path: '/StackBar', name: 'StackBar', component: StackBar},
    {path: '/mapAreaSelect', name: 'mapAreaSelect', component: mapAreaSelect},
    {path: '/mapDeep', name: 'mapDeep', component: mapDeep},
    {path: '/Concentriccircles', name: 'Concentriccircles', component: Concentriccircles},
    {path: '/RecruitIndustry', name: 'RecruitIndustry', component: RecruitIndustry},
    {path: '/EconomyAreaGDPIndex', name: 'EconomyAreaGDPIndex', component: EconomyAreaGDPIndex},
    {path: '/StartupIndexAreaIndustry', name: 'StartupIndexAreaIndustry', component: StartupIndexAreaIndustry},
    {path: '/ProvinceGDPTendency', name: 'ProvinceGDPTendency', component: ProvinceGDPTendency},


    {path: '/', name: 'default', component: EchartsMaps},


  ]
})


//测试Miti UI 使用
// new Vue({
//   el: '#app',
//   //这里render的只是一个组件而已 传啥就渲染啥
//   render: h => h(App)
// })

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


// 这里的router引用方式可能并不是主流哦   路由需要一个根组件 要么给全局的 要么给一个 index.html 的挂载点
new Vue({
  router,
  template: `
    <div class="routeArea">
      <h1>区域和产业指数</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
         <p>
        <li><router-link :to="{ name: 'RecruitIndustry'}">招聘指数-各行业-Top10-最近5个月</router-link></li>
       
        </p>
        <p>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-地区生产总值</router-link></li>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-法人单位数量</router-link></li>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-企业法人单位数量</router-link></li>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-年末总人口</router-link></li>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-在职岗位平均工资</router-link></li>



        </p>
        <p>
  <li><router-link :to="{ name: 'ProvinceGDPTendency'}">经济指数-地区生产总值季度增长趋势</router-link></li>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-各省法人单位数增长趋势</router-link></li>
  <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-各省企业法人数增长趋势</router-link></li>        
</p> 
        <p>
        <li><router-link :to="{ name: 'lifeExpectancy'}">时间轴-散点图</router-link></li>
        <li><router-link :to="{ name: 'innovateIndustry'}">创新指数-区域-行业-最近十年  </router-link></li>
        </p>
        <p>
        <li><router-link :to="{ name: 'mapArea'}">地图-散点-Top5</router-link></li>
        <li><router-link :to="{ name: 'mapAreaSelect'}">地图-区域选择-联动</router-link></li>
        <li><router-link :to="{ name: 'mapDeep'}">地图钻取</router-link></li>
        </p>
        <p>
         <li><router-link :to="{ name: 'AnscombeQuartet'}">AnscombeQuartet</router-link></li>
        <li><router-link :to="{ name:'recruit'}">直方图-水印</router-link></li>
        <li><router-link :to="{ name: 'CrossBar'}">交错直方图</router-link></li>
        <li><router-link :to="{ name: 'StackBar'}">堆叠直方图</router-link></li>
        <li><router-link :to="{ name:'economy'}">南丁格尔图</router-link></li>
        <li><router-link :to="{ name:'Concentriccircles'}">同心圆-分层展开</router-link></li>
        <li><router-link :to="{ name: 'autoPaly'}">模拟自动点击</router-link></li>
</p>
<p>
        <li><router-link :to="{ name: 'StartupIndexAreaIndustry'}">创业指数</router-link></li>
</p>
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
