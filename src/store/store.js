import Vue from "vue";
import Vuex from "vuex";
import teachersAPI from 'api-client/teachers'
import _set from 'lodash/set'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teachers: []
  },
  mutations: {
    setTeachers(state, payload) {
      state.teachers = payload
    },
    updateTeachers(state, { id, objKey, value }) {
      let teacher = state.teachers.find(t=>t.id===id)
      _set(teacher,objKey,value)
      state.teachers=[...state.teachers]
    }
  },
  actions: {
    getTeachers({ commit }) {
      teachersAPI.getTeachers().then((r) => {
        commit('setTeachers', r)
      })
    }
  },
  getters: {
    getTeacherByID: (state) => (id) => {
      return state.teachers.find(teacher => teacher.id === id)
    }
  }

});
