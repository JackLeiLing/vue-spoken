<template>
  <div>
    <v-text-field
      v-if="typeof value === 'string' || typeof value === 'number'"
      :label="label"
      :value="value"
      dark
      class="white--text"
      @change="onChange($event, objKey, id, value)"
      :error-messages="error"
    ></v-text-field>
    <v-switch
      v-else-if="typeof value === 'boolean'"
      :label="label"
      :value="value"
      dark
      class="white--text"
      @change="onChange($event, objKey, id)"
    ></v-switch>
    <div v-else-if="Array.isArray(value)" class="field-collection">
      <h3>{{ label }}</h3>
      <Field
        v-for="(v, index) in value"
        :objKey="objKey + '[' + index + ']'"
        :id="id"
        :value="v"
        :key="v"
        :label="label + '-' + index"
        @fieldChange="onChange($event.value, $event.objKey, id, value)"
      />
    </div>
    <div v-else-if="typeof value === 'object'" class="field-group">
      <h3>{{ label }}</h3>
      <Field
        v-for="(v, k) in value"
        :key="k"
        :objKey="objKey + '.' + k"
        :id="id"
        :value="v"
        :label="k"
        @fieldChange="onChange($event.value, $event.objKey, id, 'hello')"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "objKey", "value", "label", "keyToLabel", "validation"],
  name: "Field",
  data() {
    return {
      error: null
    };
  },
  computed: {
    selectedTeacher() {
      return this.$store.getters.getTeacherByID(this.id);
    }
  },

  methods: {
    onChange(e, objKey, id) {
      this.error = null;

      if (this.validation) {
        this.error = this.validation(e, this.selectedTeacher);
        return;
      }
      //v-switch is emitting null when it is off, need to convert it to false to set correct boolean value.
      if (e === null) {
        e = false;
      }
      this.$emit("fieldChange", { value: e, objKey: objKey, id: id });
    }
  }
};
</script>
<style lang="scss" scoped>
.field-collection {
  border: 1px solid white;
  padding: 1rem;
}
</style>
