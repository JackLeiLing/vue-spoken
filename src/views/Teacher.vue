<template>
  <v-container class="editable-form white--text">

    <v-row v-if="teacher">
      <v-col>
        <label>
          First Name:
          <input
            type="text"
            v-model="teacher.firstName"
            :class="hasError('teacher.firstName')?'input--error':''"
            @change="checkForm"
            ref="teacher.firstName"
          />
        </label>
      </v-col>
      <v-col>
        <label>
          Last Name:
          <input
            type="text"
            v-model="teacher.lastName"
            class="white--text"
            :class="hasError('teacher.lastName')?'input--error':''"
            @change="checkForm"
            ref="teacher.lastName"
          />
        </label>
      </v-col>
    </v-row>

     <v-row>
      <ul>
        <li v-for="(e, i) in errors" :key="i">
          <button @click="focusError(e)">{{e.message}}</button>
        </li>
      </ul>
    </v-row>

    <v-row>
      <pre>
        {{ teacher }}
      </pre>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TeacherView',
  data() {
    return {
      errors: []
    }
  },
  computed: {
    teacherID() {
      return this.$route.params.id
    },
    teacher() {
      let id = this.$route.params.id
      return this.$store.getters.getTeacherByID(id)
    }
  },
  methods: {
    checkForm(e) {
      this.errors = []
      if (this.teacher.firstName !== 'Jack') {
        this.errors.push({
          ref: 'teacher.firstName',
          message: 'First name must be Jack'
        })
      }

       if (this.teacher.firstName === this.teacher.lastName) {
        this.errors.push({
          ref:'teacher.lastName',
          message: 'First name can not be the same as last name.'
        })
      }


      if (!this.errors.length) {
        return true
      }

      e.preventDefault()
    },
    hasError(path){
      return this.errors.filter(e=>{
        return e.ref===path
      }).length
    },
    focusError(e){
      this.$refs[e.ref].focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.input--error{
  border: 1px solid red;
}
</style>
