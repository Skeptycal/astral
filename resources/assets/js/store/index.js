import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import stars from './modules/stars'
import tags from './modules/tags'
import galileo from './modules/galileo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    stars,
    tags,
    galileo
  }
})
