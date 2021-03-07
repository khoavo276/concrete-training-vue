import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { id: 0, key: 'games', name: 'Games', status: true, order: 20 },
      { id: 1, key: 'defi', name: 'Defi', status: false, order: 6 },
      { id: 2, key: 'khoa', name: 'Khoa', status: false, order: 10 },
      { id: 3, key: 'thinh', name: 'Thinh', status: true, order: 9 }
    ]
  },
  getters: {
    getLastId: state => {
      return state.categories[state.categories.length - 1].id
    },
    getItemByOrder: state => order => {
      console.log('ordet: ', order)
      return state.categories.find(item => item.order === order)
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
