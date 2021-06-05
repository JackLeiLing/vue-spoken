<template>
  <v-row>
    <CardTeacher v-for="t in teachers" :key="t.id" :teacher="t" />
  </v-row>
</template>
<script>
import CardTeacher from "../components/CardTeacher";
export default {
  components: {
    CardTeacher
  },
  computed: {
    teachers() {
      return this.$store.state.teachers;
    }
  }
};
</script>
