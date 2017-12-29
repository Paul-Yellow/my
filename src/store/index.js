import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import user from './modules/user'
import getters from './getters'
import dataSubmitStore from './modules/dataSubmitStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    user,
    dataSubmitStore
  },
  getters
})

export default store
