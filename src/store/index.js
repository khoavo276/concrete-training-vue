import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      { id: 0, key: 'games', name: 'Games', show: true, order: 0 },
      { id: 1, key: 'defi', name: 'Defi', show: false, order: 1 },
      { id: 2, key: 'khoa', name: 'Khoa', show: false, order: 2 },
      { id: 3, key: 'thinh', name: 'Thinh', show: true, order: 3 }
    ]
  },
  getters: {
    // doneTodos: state => {
    //   return state.categories.filter(todo => todo.done)
    // },
    getLastId: state => {
      return state.categories[state.categories.length - 1].id
    }
  },
  mutations: {
    addCategories(state, item) {
      state.categories.push(item)
    }
    // delTodo(state, id) {
    //   console.log(
    //     'store: ',
    //     state.todos.filter(todo => todo.id != id)
    //   )
    //   state.todos = state.todos.filter(todo => todo.id != id)
    // }
  },
  actions: {},
  modules: {}
})
