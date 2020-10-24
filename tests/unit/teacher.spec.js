import { mount, createLocalVue} from "@vue/test-utils";
import Teacher from "@/views/teacher.vue";
import VueRouter from 'vue-router'
import store from '../../src/store/store'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(Vuetify)

describe("teacher.vue", () => {
  it("renders teacher form", () => {
    const wrapper = mount(Teacher, {
      localVue,
      router,
      store
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
