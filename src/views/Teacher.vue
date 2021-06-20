<template>
  <v-container class="editable-form white--text">
    <v-row v-if="teacher">
      <v-col v-for="field in teacherForm" :key="field.apiKey">
        <Field
          :id="teacherID"
          :objKey="field.apiKey"
          :label="field.label"
          :value="getFieldValue(teacher, field.apiKey)"
          @fieldChange="updateTeacher"
          :keyToLabel="field.keyToLabel"
          :validation="field.validation"
        />
      </v-col>
    </v-row>

    <div :key="k + 1" v-for="(v, k) in teacher">{{ k }}:{{ v }}</div>
    
    <pre>
      {{teachers}}
    </pre>
    <img src="../assets/whoKnowsLogo.svg"/>
    
  </v-container>
</template>

<script>
// @ is an alias to /src
import Field from "@/components/Field";
import teacherDef from "@/api/data/teacherDef";
import _merge from "lodash/merge";
import _get from "lodash/get";
import _cloneDeep from "lodash/cloneDeep";

export default {
  name: "TeacherView",
  components: { Field},
  mounted() {},
  data() {
    return {
      teacherForm: [
        {
          apiKey: "firstName",
          label: "First name",
          validation(v, t) {
            if(t.address.state==='NSW'){
              return "can't live in NSW"
            }
            if (v.length > 10) {
              return "Name length can not be longer than 10";
            }
          }
        },
        {
          apiKey: "lastName",
          label: "Last name"
        },
        {
          apiKey: "students",
          label: "Students"
        },
        {
          apiKey: "address",
          label: "Address",
          keyToLabel: {
            street: "Street",
            state: "State"
          }
        },
        {
          apiKey: "available",
          label: "Available"
        }
      ]
    };
  },

  computed: {
    teacherID() {
      return this.$route.params.id;
    },
    teacher() {
      let id = this.$route.params.id;
      let selectedTeacher = this.$store.getters.getTeacherByID(id);

      const t = _cloneDeep(teacherDef);
      let teacherData = _merge(t, selectedTeacher);
      return teacherData;
    },
    teachers() {
      return this.$store.getters.teachers
    }
  },
  methods: {
    updateTeacher({ value, objKey, id }) {
      this.$store.commit("updateTeachers", {
        id,
        objKey,
        value
      });
    },
    cols(v) {
      if (typeof v === "object" || Array.isArray(v)) {
        return "12";
      }
      return "3";
    },
    getFieldValue(obj, key) {
      return _get(obj, key);
    }
  }
};
</script>
