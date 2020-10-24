import { mount, createLocalVue} from "@vue/test-utils";
import Teacher from "@/views/teacher.vue";
import VueRouter from 'vue-router'
import store from '../../src/store/store'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Vue from 'vue'

// See: https://github.com/vuetifyjs/vuetify/issues/4964.
// See: https://github.com/vuetifyjs/vuetify/issues/4068.
Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter(
  {
    routes: [
      { path: '/teacher/:id', name: 'teacher' }
    ]
  }
)

localVue.use(Vuetify)
localVue.use(Vuex)

describe("teacher.vue", () => {
  it("renders teacher form", async () => {
    await store.dispatch('getTeachers')
    const wrapper = mount(Teacher, {
      localVue,
      router,
      store,
    });
    await router.push({name:'teacher', params:{id:'a'}})
    expect(wrapper.html()).toMatchSnapshot();
  });
});
