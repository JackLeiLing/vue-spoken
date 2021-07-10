<template>
  <v-container>
    <v-row>
      <v-col sm="4" v-for="t in teachers" :key="t.id">
        <CardTeacher :teacher="t" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn 
          @click="toggleTeacherForm"
          color="primary"
          class="float-right">
          Register as a teacher
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="showTeacherForm">
      <v-col>
        <h2 class="white--text">
          Teacher Registration
        </h2>
        <form-teacher :teacher="teacher" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardTeacher from "../components/CardTeacher";
import FormTeacher from "../components/form/FormTeacher";

export default {
  components: {
    CardTeacher,
    FormTeacher
  },
  data() {
    return {
      showTeacherForm: false
    };
  },
  computed: {
    teachers() {
      return this.$store.state.teachers;
    },
    teacher() {
      return {
        firstName: "John",
        lastName: "Smith",
        expertises: ["English", "IT", "fdsafds"]
      };
    }
  },
  methods: {
    toggleTeacherForm() {
      this.showTeacherForm = !this.showTeacherForm;
    }
  }
};
</script>
