import Vue from 'vue'
import App from './App'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import store from './store'

//招聘指数
import  Recruit  from './components/RecruitIndex/Recruit.vue'
import  RecruitIndustry  from './components/RecruitIndex/RecruitIndustry.vue'
import  RecruiteIndexEduBackground  from './components/RecruitIndex/RecruiteIndexEduBackground.vue'
import  RecruiteIndexYearsOfWorked  from './components/RecruitIndex/RecruiteIndexYearsOfWorked.vue'

// 经济指数
import Economy from './components/EconomyIndex/Economy.vue'

import EconomyAreaGDPIndex from './components/EconomyIndex/economyAreaGDPIndex.vue'
import EconomyLegalPersonIndex from './components/EconomyIndex/economyLegalPersonIndex.vue'
import EconomyEnterpriseLegalPersonIndex from './components/EconomyIndex/economyEnterpriseLegalPersonIndex.vue'
import economyIndexKeyCityYearEndTotalPopulation from './components/EconomyIndex/economyIndexKeyCityYearEndTotalPopulation.vue'
import economyIndexKeyCityAvgSalary from './components/EconomyIndex/economyIndexKeyCityAvgSalary.vue'

import ProvinceGDPTendency from './components/Tendency/ProvinceGDPTendency.vue'
import LegalPersonTendency from './components/Tendency/LegalPersonTendency.vue'
import EnterpriseLegalPersonTendency from './components/Tendency/EnterpriseLegalPersonTendency.vue'

//创新指数

import Innovate from './components/InnovateIndex/Innovate.vue'
import InnovateIndexPatent from './components/InnovateIndex/InnovateIndexPatent.vue'
import InnovateIndexCopyright from './components/InnovateIndex/InnovateIndexCopyright.vue'
import  InnovateIndexKeyCityInvisibleAssets from './components/InnovateIndex/InnovateIndexKeyCityInvisibleAssets.vue'
import  InnovateIndexProvinceAreaInvisibleAssets from './components/InnovateIndex/InnovateIndexProvinceAreaInvisibleAssets.vue'


//产业指数
import Industry from './components/IndustryIndex/Industry.vue'

import IndustryIndexMacroscopic from './components/IndustryIndex/IndustryIndexMacroscopic.vue'
import  IndustryIndexPrimaryIndustry from './components/IndustryIndex/IndustryIndexPrimaryIndustry.vue'
import  IndustryIndexSecondaryIndustry from './components/IndustryIndex/IndustryIndexSecondaryIndustry.vue'
import  IndustryIndexTertiaryIndustry from './components/IndustryIndex/IndustryIndexTertiaryIndustry.vue'

import  IndustryIndexKeyCityPrimaryIndustry from './components/IndustryIndex/IndustryIndexKeyCityPrimaryIndustry.vue'
import  IndustryIndexKeyCitySecondaryIndustry from './components/IndustryIndex/IndustryIndexKeyCitySecondaryIndustry.vue'
import  IndustryIndexKeyCityTertiaryIndustry from './components/IndustryIndex/IndustryIndexKeyCityTertiaryIndustry.vue'

//创业指数

import StartUp from './components/StartUpIndex/StartUp.vue'

import StartupIndexAreaIndustry from './components/StartUpIndex/StartupIndexAreaIndustry.vue'
import StartupIndexEstablishNum from './components/StartUpIndex/StartupIndexEstablishNum.vue'
import StartupKeyCityEstablishNum from './components/StartUpIndex/StartupKeyCityEstablishNum.vue'
import StartupIndexPackNum  from './components/StartUpIndex/StartupIndexPackNum.vue'
import StartupKeyCityPackNum from './components/StartUpIndex/StartupKeyCityPackNum.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [


    // 经济指数
    {path: '/Economy', name: 'Economy', component: Economy,
      children: [
        // { path: '', component: Economy },
        {path: 'EconomyAreaGDPIndex', name: 'EconomyAreaGDPIndex', component: EconomyAreaGDPIndex },
        {path: 'EconomyLegalPersonIndex', name: 'EconomyLegalPersonIndex', component: EconomyLegalPersonIndex},
        {path: 'EconomyEnterpriseLegalPersonIndex', name: 'EconomyEnterpriseLegalPersonIndex', component: EconomyEnterpriseLegalPersonIndex},
        {path: 'economyIndexKeyCityYearEndTotalPopulation', name: 'economyIndexKeyCityYearEndTotalPopulation', component: economyIndexKeyCityYearEndTotalPopulation},
        {path: 'economyIndexKeyCityAvgSalary', name: 'economyIndexKeyCityAvgSalary', component: economyIndexKeyCityAvgSalary},

        {path: 'ProvinceGDPTendency', name: 'ProvinceGDPTendency', component: ProvinceGDPTendency},
        {path: 'LegalPersonTendency', name: 'LegalPersonTendency', component: LegalPersonTendency},
        {path: 'EnterpriseLegalPersonTendency', name: 'EnterpriseLegalPersonTendency', component: EnterpriseLegalPersonTendency},
      ]
    } ,

    // 产业指数
    {path: '/Industry', name: 'Industry', component: Industry,
      children: [
        // { path: '', component: Industry },
        {path: 'IndustryIndexMacroscopic', name: 'IndustryIndexMacroscopic', component: IndustryIndexMacroscopic},
        {path: 'IndustryIndexPrimaryIndustry', name: 'IndustryIndexPrimaryIndustry', component: IndustryIndexPrimaryIndustry},
        {path: 'IndustryIndexSecondaryIndustry', name: 'IndustryIndexSecondaryIndustry', component: IndustryIndexSecondaryIndustry},
        {path: 'IndustryIndexTertiaryIndustry', name: 'IndustryIndexTertiaryIndustry', component: IndustryIndexTertiaryIndustry},

        {path: 'IndustryIndexKeyCityPrimaryIndustry', name: 'IndustryIndexKeyCityPrimaryIndustry', component: IndustryIndexKeyCityPrimaryIndustry},
        {path: 'IndustryIndexKeyCitySecondaryIndustry', name: 'IndustryIndexKeyCitySecondaryIndustry', component: IndustryIndexKeyCitySecondaryIndustry},
        {path: 'IndustryIndexKeyCityTertiaryIndustry', name: 'IndustryIndexKeyCityTertiaryIndustry', component: IndustryIndexKeyCityTertiaryIndustry},
      ]
    } ,


    //创新指数
    {path: '/Innovate', name: 'Innovate', component: Innovate,
      children: [
        {path: 'InnovateIndexPatent', name: 'InnovateIndexPatent', component: InnovateIndexPatent},
        {path: 'InnovateIndexCopyright', name: 'InnovateIndexCopyright', component: InnovateIndexCopyright},
        {path: 'InnovateIndexKeyCityInvisibleAssets', name: 'InnovateIndexKeyCityInvisibleAssets', component: InnovateIndexKeyCityInvisibleAssets},
        {path: 'InnovateIndexProvinceAreaInvisibleAssets', name: 'InnovateIndexProvinceAreaInvisibleAssets', component: InnovateIndexProvinceAreaInvisibleAssets},

      ]
    } ,

    //招聘指数
    {path: '/Recruit', name: 'Recruit', component: Recruit,
      children: [
        {path: 'RecruiteIndexEduBackground', name: 'RecruiteIndexEduBackground', component: RecruiteIndexEduBackground},
        {path: 'RecruiteIndexYearsOfWorked', name: 'RecruiteIndexYearsOfWorked', component: RecruiteIndexYearsOfWorked},
        {path: 'RecruitIndustry', name: 'RecruitIndustry', component: RecruitIndustry},
      ]
    } ,

    // 创业指数
    {path: '/StartUp', name: 'StartUp', component: StartUp,
      children: [
        {path: 'StartupIndexPackNum', name: 'StartupIndexPackNum', component: StartupIndexPackNum},
        {path: 'StartupKeyCityPackNum', name: 'StartupKeyCityPackNum', component: StartupKeyCityPackNum},
        {path: 'StartupIndexAreaIndustry', name: 'StartupIndexAreaIndustry', component: StartupIndexAreaIndustry},
        {path: 'StartupIndexEstablishNum', name: 'StartupIndexEstablishNum', component: StartupIndexEstablishNum},
        {path: 'StartupKeyCityEstablishNum', name: 'StartupKeyCityEstablishNum', component: StartupKeyCityEstablishNum},
      ]
    } ,

    {path: '/', name: 'default', component: EconomyAreaGDPIndex},

  ]
})

new Vue({
   template: '<App/>',
  components: { App },
  router,
  store,
}).$mount('#app')


/*
new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h1>区域和产业指数</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>

        <p>
        <li><router-link :to="{ name: 'StartupIndexPackNum'}">创业指数-各省园区数量-园区入驻企业 </router-link></li>
        <li><router-link :to="{ name: 'StartupKeyCityPackNum'}">创业指数-重点城市园区数量-园区入驻企业及省内排行 </router-link></li>
        </p>
        <hr/>
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
        <li><router-link :to="{ name: 'StartupIndexEstablishNum'}">创业指数-各省成立企业数量分布</router-link></li>
        <li><router-link :to="{ name: 'StartupKeyCityEstablishNum'}">创业指数-重点城市成立企业数量分布</router-link></li>
        <li><router-link :to="{ name: 'StartupIndexAreaIndustry'}">创业指数-地区成立企业数量行业分布</router-link></li>
        </p>


      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#route')


new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h2>创业指数</h2>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <p>
        <li><router-link :to="{ name: 'StartupIndexPackNum'}">创业指数-各省园区数量-园区入驻企业 </router-link></li>
        <li><router-link :to="{ name: 'StartupKeyCityPackNum'}">创业指数-重点城市园区数量-园区入驻企业及省内排行 </router-link></li>
        </p>
         <p>
        <li><router-link :to="{ name: 'StartupIndexEstablishNum'}">创业指数-各省成立企业数量分布</router-link></li>
        <li><router-link :to="{ name: 'StartupKeyCityEstablishNum'}">创业指数-重点城市成立企业数量分布</router-link></li>
        <li><router-link :to="{ name: 'StartupIndexAreaIndustry'}">创业指数-地区成立企业数量行业分布</router-link></li>
        </p>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#StartUpIndex')


new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h2>经济指数</h2>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
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

      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#EconomyIndex')

new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h2>产业指数</h2>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
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

      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#IndustryIndex')


new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h2>创新指数</h2>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
         <p>
         <li><router-link :to="{ name: 'InnovateIndexPatent'}">创新指数-各省专利数量构成</router-link></li>
         <li><router-link :to="{ name: 'InnovateIndexCopyright'}">创新指数-各省作品著作权</router-link></li>
         </p>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#InnovateIndex')

new Vue({
  store,
  router,
  template: `
    <div class="routeArea">
      <h2>招聘指数</h2>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <p>
        <li><router-link :to="{ name: 'RecruitIndustry'}">招聘指数-各行业-Top10-最近5个月</router-link></li>
        </p>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#RecruitIndex')
*/

// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
