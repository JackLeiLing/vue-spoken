import Vue from "vue";
import Vuex from "vuex"
import teachersAPI from 'api-client/teachers'
import _set from 'lodash/set'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    teachers: []
  },
  mutations: {
    setTeachers(state, payload) {
      state.teachers = payload
    },
    updateTeachers(state, { id, objKey, value }) {
      let teacher = state.teachers.find(t=>t.id===id)
      console.log(teacher)
      _set(teacher,objKey,value)
      state.teachers=[...state.teachers]
    }
  },
  actions: {
    getTeachers({ commit }) {
      teachersAPI.getTeachers().then((r) => {
        commit('setTeachers', r)
      }).catch((e)=>{
        console.log('error', e)
      })
    }
  },
  getters: {
    getTeacherByID: (state) => (id) => {
      return state.teachers.find(teacher => teacher.id === id)
    }
  }
});
