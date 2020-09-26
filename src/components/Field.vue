<template>
  <v-text-field
    v-if="typeof value === 'string'|| typeof value === 'number'"
    :label="objKey"
    :value="value"
    dark
    class="white--text"
    @change="onChange($event,objKey,id)"
  ></v-text-field>
  <v-switch
    v-else-if="typeof value === 'boolean'"
    :label="objKey"
    :value="value"
    dark
    class="white--text"
    @change="onChange($event,objKey,id)"
  ></v-switch>
  <div v-else-if="Array.isArray(value)" class="field-collection">
    <h3>{{objKey}}</h3>
    <Field
      v-for="(v, index) in value"
      :objKey="objKey+'['+index+']'"
      :id="id"
      :value="v"
      :key="v"
      @fieldChange="onChange($event.value, $event.objKey, id)"
    />
  </div>
  <div v-else-if="typeof value==='object'" class="field-group">
    <h3>{{objKey}}</h3>
    <Field
      v-for="(v,k) in value"
      :key="k"
      :objKey="objKey+'.'+k"
      :id="id"
      :value="v"
      @fieldChange="onChange($event.value, $event.objKey, id)"
    />
  </div>
</template>
<script>
export default {
  props: ["id", "objKey", "value"],
  name: "Field",
  methods: {
    onChange(e, objKey, id) {

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