import Vue from 'vue'
import Vuex from 'vuex'
import teachersAPI from 'api-client/teachers'
import _set from 'lodash/set'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    teachers: [],
    filteredTeachers: []
  },
  mutations: {
    setTeachers(state, payload) {
      state.teachers = payload
    },
    setFilteredTeachers(state, payload) {
      state.filteredTeachers = payload
    },
    updateTeachers(state, { id, objKey, value }) {
      let teacher = state.teachers.find((t) => t.id === id)
      _set(teacher, objKey, value)
      state.teachers = [...state.teachers]
    }
  },
  actions: {
    getTeachers({ commit }) {
      teachersAPI
        .getTeachers()
        .then((r) => {
          commit('setTeachers', r)
        })
        .catch((e) => {
          console.log('error', e)
        })
    },
    searchTeachers({ state, commit }, payload) {
      const { language, name } = payload
      if (language && name) {
        const filteredTeachers = state.teachers
          .filter((t) => t.nativeLanguage === language)
          .filter((t) => t.firstName.toLowerCase().includes(name.toLowerCase()))
        commit('setFilteredTeachers', filteredTeachers)
      } else if (language) {
        const filteredTeachers = state.teachers.filter(
          (t) => t.nativeLanguage === language
        )
        commit('setFilteredTeachers', filteredTeachers)
      } else if (name) {
        const filteredTeachers = state.teachers.filter((t) => {
          return t.firstName.toLowerCase().includes(name.toLowerCase())
        })
        commit('setFilteredTeachers', filteredTeachers)
      } else {
        commit('setFilteredTeachers', state.teachers)
      }
    }
  },
  getters: {
    getTeacherByID: (state) => (id) => {
      return state.teachers.find((teacher) => teacher.id === id)
    },
    teachers: (state) => state.teachers,
    filteredTeachers: (state) => state.filteredTeachers,
    allLanguages: (state) => {
      const langs = state.teachers.map((t) => t.nativeLanguage)
      return [...new Set(langs)]
    }
  }
})
