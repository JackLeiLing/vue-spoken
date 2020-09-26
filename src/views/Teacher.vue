<template>
  <v-container class="editable-form white--text">
    <v-row>
      <v-col  cols="4" :key="k" v-for="(v, k) in teacher">
        <Field
          :id="teacher.id"
          :objKey="k"
          :value="v"
          @fieldChange="updateTeacher"
        />
      </v-col>
    </v-row>

    <div :key="k + 1" v-for="(v, k) in teacher">{{ k }}:{{ v }}</div>
  </v-container>
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
