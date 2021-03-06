import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { key: 'games', name: 'Games', status: true, order: 20 },
      { key: 'defi', name: 'Defi', status: false, order: 6 },
      { key: 'khoa', name: 'Khoa', status: false, order: 10 },
      { key: 'thinh', name: 'Thinh', status: true, order: 9 }
    ]
  },
  getters: {
    getLastId: state => {
      return state.categories[state.categories.length - 1].id
    },
    getListOrder: state => {
      function compare(a, b) {
        if (a.order < b.order) return -1
        if (a.order > b.order) return 1
        return 0
      }
      let listSort = []
      listSort = state.categories
      return listSort.sort(compare)
    }
  },
  mutations: {
    addCategories(state, item) {
      state.categories.push(item)
    },
    delCategories(state, order) {
      state.categories = state.categories.filter(item => item.order != order)
    }
  },
  actions: {},
  modules: {}
})
