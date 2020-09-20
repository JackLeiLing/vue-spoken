import Vue from "vue";
import Vuex from "vuex";
import teachersAPI from 'api-client/teachers'

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
      let teachers = state.teachers.map(t => {
        if (t.id === id) {
          t[objKey] = value
        }
        return t
      })
      state.teachers = teachers
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
