<template>
  <div class="pa-10 white--text">
    <v-row>
      <v-col>
        <h2>
          Teacher registration form
        </h2>
      </v-col>
    </v-row>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field
            label="First Name"
            v-model="teacher.firstName"
            color="yellow"
            shaped
            filled
          />
        </v-col>
        <v-col>
          <v-text-field
            label="Last Name"
            v-model="teacher.lastName"
            color="white"
            shaped
            filled
          />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "TeacherView",
  data() {
    return {
      errors: []
    };
  },
  computed: {
    teacherID() {
      return this.$route.params.id;
    },
    teacher() {
      let id = this.$route.params.id;
      return this.$store.getters.getTeacherByID(id);
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
