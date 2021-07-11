import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Vue from 'vue'
import store from '../src/store/store'

// See: https://github.com/vuetifyjs/vuetify/issues/4964.
// See: https://github.com/vuetifyjs/vuetify/issues/4068.
Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
    routes: [{ path: '/teacher/:id', name: 'teacher' }],
})

localVue.use(Vuetify)
localVue.use(Vuex)

export default {
    localVue,
    router,
    store,
}
