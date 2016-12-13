import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {

    BASE_URL : 'http://172.16.131.235:8080/spider-web/riviews/gardenindex',
    // BASE_URL : 'http://172.16.123.73:8881/spider-web/riviews/gardenindex',
    CHINA_MAP_JSON :'http://7xlgc1.com1.z0.glb.clouddn.com/china.json'
  },

  actions: {
  },

  mutations: {
  },

  getters: {
  }
})

export default store
