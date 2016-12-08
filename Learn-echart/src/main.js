import Vue from 'vue'
import App from './App'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import store from './store'

// Demo
import  EchartsMaps from './components/Demo/echartMap.vue'
import  ecomomyMap from './components/Demo/economyMap.vue'
import  innovateIndustry from './components/Demo/innovateIndustry.vue'
import  lifeExpectancy from './components/Demo/lifeExpectancy.vue'
import  mapArea from './components/Demo/mapArea.vue'
import  autoPaly from './components/Demo/autoPaly.vue'
import  AnscombeQuartet from './components/Demo/AnscombeQuartet.vue'
import  CrossBar from './components/Demo/CrossBar.vue'
import  StackBar from './components/Demo/StackBar.vue'
import  mapAreaSelect from './components/Demo/mapAreaSelect.vue'
import  mapDeep from './components/Demo/mapDeep.vue'
import  Concentriccircles from './components/Demo/Concentriccircles.vue'

//招聘指数
import  RecruitIndustry  from './components/RecruitIndex/RecruitIndustry.vue'
// 经济指数
import EconomyAreaGDPIndex from './components/EconomyIndex/economyAreaGDPIndex.vue'
import EconomyLegalPersonIndex from './components/EconomyIndex/economyLegalPersonIndex.vue'
import EconomyEnterpriseLegalPersonIndex from './components/EconomyIndex/economyEnterpriseLegalPersonIndex.vue'
import economyIndexKeyCityYearEndTotalPopulation from './components/EconomyIndex/economyIndexKeyCityYearEndTotalPopulation.vue'
import economyIndexKeyCityAvgSalary from './components/EconomyIndex/economyIndexKeyCityAvgSalary.vue'

import ProvinceGDPTendency from './components/Tendency/ProvinceGDPTendency.vue'
import LegalPersonTendency from './components/Tendency/LegalPersonTendency.vue'
import EnterpriseLegalPersonTendency from './components/Tendency/EnterpriseLegalPersonTendency.vue'
//创新指数
import InnovateIndexPatent from './components/InnovateIndex/InnovateIndexPatent.vue'
import InnovateIndexCopyright from './components/InnovateIndex/InnovateIndexCopyright.vue'

//产业指数
import IndustryIndexMacroscopic from './components/IndustryIndex/IndustryIndexMacroscopic.vue'
import  IndustryIndexPrimaryIndustry from './components/IndustryIndex/IndustryIndexPrimaryIndustry.vue'
import  IndustryIndexSecondaryIndustry from './components/IndustryIndex/IndustryIndexSecondaryIndustry.vue'
import  IndustryIndexTertiaryIndustry from './components/IndustryIndex/IndustryIndexTertiaryIndustry.vue'

import  IndustryIndexKeyCityPrimaryIndustry from './components/IndustryIndex/IndustryIndexKeyCityPrimaryIndustry.vue'
import  IndustryIndexKeyCitySecondaryIndustry from './components/IndustryIndex/IndustryIndexKeyCitySecondaryIndustry.vue'
import  IndustryIndexKeyCityTertiaryIndustry from './components/IndustryIndex/IndustryIndexKeyCityTertiaryIndustry.vue'



//创业指数
import StartupIndexAreaIndustry from './components/StartUpIndex/StartupIndexAreaIndustry.vue'
import StartupIndexEstablishNum from './components/StartUpIndex/StartupIndexEstablishNum.vue'
import StartupKeyCityEstablishNum from './components/StartUpIndex/StartupKeyCityEstablishNum.vue'


// Vue.use(MintUI)
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

//招聘指数
    {path: '/RecruitIndustry', name: 'RecruitIndustry', component: RecruitIndustry},
// 经济指数
    {path: '/EconomyAreaGDPIndex', name: 'EconomyAreaGDPIndex', component: EconomyAreaGDPIndex},
    {path: '/EconomyLegalPersonIndex', name: 'EconomyLegalPersonIndex', component: EconomyLegalPersonIndex},
    {path: '/EconomyEnterpriseLegalPersonIndex', name: 'EconomyEnterpriseLegalPersonIndex', component: EconomyEnterpriseLegalPersonIndex},
    {path: '/economyIndexKeyCityYearEndTotalPopulation', name: 'economyIndexKeyCityYearEndTotalPopulation', component: economyIndexKeyCityYearEndTotalPopulation},
    {path: '/economyIndexKeyCityAvgSalary', name: 'economyIndexKeyCityAvgSalary', component: economyIndexKeyCityAvgSalary},

    {path: '/ProvinceGDPTendency', name: 'ProvinceGDPTendency', component: ProvinceGDPTendency},
    {path: '/LegalPersonTendency', name: 'LegalPersonTendency', component: LegalPersonTendency},
    {path: '/EnterpriseLegalPersonTendency', name: 'EnterpriseLegalPersonTendency', component: EnterpriseLegalPersonTendency},

// 创新指数
    {path: '/InnovateIndexPatent', name: 'InnovateIndexPatent', component: InnovateIndexPatent},
    {path: '/InnovateIndexCopyright', name: 'InnovateIndexCopyright', component: InnovateIndexCopyright},
// 产业指数
    {path: '/IndustryIndexMacroscopic', name: 'IndustryIndexMacroscopic', component: IndustryIndexMacroscopic},
    {path: '/IndustryIndexPrimaryIndustry', name: 'IndustryIndexPrimaryIndustry', component: IndustryIndexPrimaryIndustry},
    {path: '/IndustryIndexSecondaryIndustry', name: 'IndustryIndexSecondaryIndustry', component: IndustryIndexSecondaryIndustry},
    {path: '/IndustryIndexTertiaryIndustry', name: 'IndustryIndexTertiaryIndustry', component: IndustryIndexTertiaryIndustry},

    {path: '/IndustryIndexKeyCityPrimaryIndustry', name: 'IndustryIndexKeyCityPrimaryIndustry', component: IndustryIndexKeyCityPrimaryIndustry},
    {path: '/IndustryIndexKeyCitySecondaryIndustry', name: 'IndustryIndexKeyCitySecondaryIndustry', component: IndustryIndexKeyCitySecondaryIndustry},
    {path: '/IndustryIndexKeyCityTertiaryIndustry', name: 'IndustryIndexKeyCityTertiaryIndustry', component: IndustryIndexKeyCityTertiaryIndustry},


    // 创业指数
    {path: '/StartupIndexAreaIndustry', name: 'StartupIndexAreaIndustry', component: StartupIndexAreaIndustry},
    {path: '/StartupIndexEstablishNum', name: 'StartupIndexEstablishNum', component: StartupIndexEstablishNum},
    {path: '/StartupKeyCityEstablishNum', name: 'StartupKeyCityEstablishNum', component: StartupKeyCityEstablishNum},


    {path: '/', name: 'default', component: null},
    {path: '*', name: 'other', component: null},


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
// 这里再外挂的生命周期级别的Vue里面注入了一个store,和router
new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h1>区域和产业指数</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <p>
        <li><router-link :to="{ name: 'RecruitIndustry'}">招聘指数-各行业-Top10-最近5个月</router-link></li>
        </p>
        <hr>
        <p>
        <li><router-link :to="{ name: 'EconomyAreaGDPIndex'}">经济指数-地区生产总值</router-link></li>
        <li><router-link :to="{ name: 'EconomyLegalPersonIndex'}">经济指数-法人单位数量</router-link></li>
        <li><router-link :to="{ name: 'EconomyEnterpriseLegalPersonIndex'}">经济指数-企业法人单位数量</router-link></li>
      
        <li><router-link :to="{ name: 'economyIndexKeyCityYearEndTotalPopulation'}">经济指数-重点城市年末总人口</router-link></li>
        <li><router-link :to="{ name: 'economyIndexKeyCityAvgSalary'}">经济指数-重点城市在职岗位平均工资</router-link></li>
        </p>
        
        <p>
        <li><router-link :to="{ name: 'ProvinceGDPTendency'}">经济指数-地区生产总值季度增长趋势</router-link></li>
        <li><router-link :to="{ name: 'LegalPersonTendency'}">经济指数-各省法人单位数增长趋势</router-link></li>
        <li><router-link :to="{ name: 'EnterpriseLegalPersonTendency'}">经济指数-各省企业法人数增长趋势</router-link></li>        
        </p>
         <hr>
         <p>
         <li><router-link :to="{ name: 'InnovateIndexPatent'}">创新指数-各省专利数量构成</router-link></li>
         <li><router-link :to="{ name: 'InnovateIndexCopyright'}">创新指数-各省作品著作权</router-link></li>
         </p>
         <hr>
         <p>
         <li><router-link :to="{ name: 'IndustryIndexMacroscopic'}">产业指数-三大产业综合</router-link></li>
         <li><router-link :to="{ name: 'IndustryIndexPrimaryIndustry'}">产业指数-各省第一产业增加值</router-link></li>
         <li><router-link :to="{ name: 'IndustryIndexSecondaryIndustry'}">产业指数-各省第二产业增加值</router-link></li>
         <li><router-link :to="{ name: 'IndustryIndexTertiaryIndustry'}">产业指数-各省第三产业增加值</router-link></li>
         </p>

         <p>
         <li><router-link :to="{ name: 'IndustryIndexKeyCityPrimaryIndustry'}">产业指数-全国重点城市-第一产业</router-link></li>
         <li><router-link :to="{ name: 'IndustryIndexKeyCitySecondaryIndustry'}">产业指数-全国重点城市-第二产业</router-link></li>
         <li><router-link :to="{ name: 'IndustryIndexKeyCityTertiaryIndustry'}">产业指数-全国重点城市-第三产业</router-link></li>
         </p>

        <hr>
        <p>
        <li><router-link :to="{ name: 'StartupIndexEstablishNum'}">创业指数-近年各省成立企业数量分布</router-link></li>
        <li><router-link :to="{ name: 'StartupKeyCityEstablishNum'}">创业指数-近年重点城市成立企业数量分布</router-link></li>
        <li><router-link :to="{ name: 'StartupIndexAreaIndustry'}">创业指数-地区成立企业数量行业分布</router-link></li>
        </p>
        <hr>
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
