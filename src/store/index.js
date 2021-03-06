import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { id: 1, key: 'games', name: 'Games', status: true, order: 20 },
      { id: 2, key: 'defi', name: 'Defi', status: false, order: 6 },
      { id: 3, key: 'khoa', name: 'Khoa', status: false, order: 10 },
      { id: 4, key: 'thinh', name: 'Thinh', status: true, order: 9 }
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
      let newList = state.categories
      return newList.sort(compare)
    }
  },
  mutations: {
    addCategories(state, item) {
      state.categories.push(item)
    },
    delCategories(state, id) {
      state.categories = state.categories.filter(item => item.id != id)
    }
  },
  actions: {},
  modules: {}
})
