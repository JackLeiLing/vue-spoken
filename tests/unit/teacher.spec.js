import { mount } from "@vue/test-utils";
import Teacher from "@/views/teacher.vue";
import mock from "../mock";

const { store, router } = mock;

describe("teacher.vue", () => {
  it("renders teacher form", async () => {
    await store.dispatch("getTeachers");
    const wrapper = mount(Teacher, mock);
    await router.push({ name: "teacher", params: { id: "a" } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
