import Vue from 'vue'
import Vuex, {mapActions, mapGetters} from 'vuex'

import StoreTagNav from './StoreTagNav'
import StoreActiveNav from './StoreActiveNav'
import tagsView from './tagsView'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    StoreTagNav,
    StoreActiveNav,
    tagsView,
  }
})
