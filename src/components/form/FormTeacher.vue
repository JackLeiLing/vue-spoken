<template>
  <v-card class="white--text">
    <v-form class="teacher-form">
      <v-text-field
        v-model="teacherInternal.firstName"
        label="First name"
      ></v-text-field>
      <v-text-field
        v-model="teacherInternal.lastName"
        label="Last name"
      ></v-text-field>
      <expertises v-model="teacherInternal.expertises"/>
      <v-row>
          <v-col>

          </v-col>
      </v-row>
      <v-row class="primary--text">
        {{ this.teacherInternal }}
      </v-row>
    </v-form>
  </v-card>
</template>
<script>
import Expertises from './Expertises.vue';
export default {
  components: { Expertises },
  data() {
    return {
      teacherInternal: this.teacher
    };
  },
  props: {
    teacher: Object
  },
  watch: {
    teacherInternal: {
      handler(newVal) {
        console.log(newVal);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.teacher-form {
  background: #fff;
  padding: 1rem;
}
</style>
