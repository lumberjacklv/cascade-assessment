import Vue from 'vue';
import Vuex from 'vuex';
import statement from './modules/statement';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    statement,
  },
});
