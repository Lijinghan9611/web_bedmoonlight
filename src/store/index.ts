import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showHeader: true //是否显示头部
  },
  getters: {
    /**
     * 获取头部状态
     */
    CheckHeadShow: state => {
      return state.showHeader;
    }
  },
  mutations: {
    /**
     * 显示头部
     */
    HeaderShow: state => {
      state.showHeader = true;
    },
    /**
     * 隐藏头部
     */
    HeaderHide: state => {
      state.showHeader = false;
    }
  },
  actions: {},
  modules: {}
});
