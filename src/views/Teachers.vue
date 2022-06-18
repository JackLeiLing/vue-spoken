<template>
  <v-container class="mt-12">
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="t in teachers" :key="t.id">
        <CardTeacher :teacher="t" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardTeacher from '../components/CardTeacher'
export default {
  components: {
    CardTeacher
  },
  computed: {
    teachers() {
      return this.$store.state.teachers
    }
  }
}
</script>
