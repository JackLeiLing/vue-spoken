<template>
  <div class="editable-form white--text">
    <div :key="k" v-for="(v,k) in teacher">
      <Field :id="teacher.id" :objKey="k" :value="v" @fieldChange="updateTeacher" />
    </div>

    <div :key="k+1" v-for="(v,k) in teacher">{{k}}:{{v}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Field from "@/components/Field";

export default {
  name: "TeacherView",
  components: { Field },
  computed: {
    teacher() {
      let id = this.$route.params.id;
      return this.$store.getters.getTeacherByID(id);
    }
  },
  methods: {
    updateTeacher({ value, objKey, id }) {
      this.$store.commit("updateTeachers", {
        id,
        objKey,
        value
      });
    }
  }
};
</script>
