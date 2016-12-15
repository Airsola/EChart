import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {

    BASE_URL : 'http://172.16.131.235:8080/spider-web/riviews/gardenindex',
    // BASE_URL : 'http://172.16.123.73:8881/spider-web/riviews/gardenindex',
    CHINA_MAP_JSON :'http://7xlgc1.com1.z0.glb.clouddn.com/china.json',
    AssetsTypeArry:["InventPatent","NewTypePatent","AppearanceDesignPatent","Copyright","Trademark","Software"],
    AssetsTypeDisplayNameArry:  ['发明专利有效量','实用新型专利有效量','外观设计专利有效量','作品著作权','商标','软件著作权']

  },

  actions: {
  },

  mutations: {
  },

  getters: {
  }
})

export default store
