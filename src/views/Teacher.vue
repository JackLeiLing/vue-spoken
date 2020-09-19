<template>
  <div class="editable-form white--text">
    <div :key="k" v-for="(v,k) in teacher">
      <v-text-field
        :label="k"
        :value="v"
        dark
        class="white--text"
        @change="updateTeacher($event,k)"
      ></v-text-field>
    </div>

    <div :key="k+1" v-for="(v,k) in teacher">
      {{k}}:{{v}}

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TeacherView",
  computed: {
    teacher() {
      let id = this.$route.params.id;
      return this.$store.getters.getTeacherByID(id);
    }
  },
  methods: {
    updateTeacher(value, key) {
      this.$store.commit("updateTeachers", {
        id: this.teacher.id,
        key,
        value
      });
    }
  }
};
</script>
