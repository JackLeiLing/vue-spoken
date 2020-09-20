<template>
  <v-text-field
    v-if="typeof value === 'string'"
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
  <div v-else-if="Array.isArray(value)">
      <Field v-for='f in value' :label="objKey" :value="f" :key="f"/>
      <!-- <span :key='f' v-for='f in value'>{{f}}</span> -->
  </div>
</template>
<script>
export default {
  props: ["id", "objKey", "value"],
  name:"Field",
  methods: {
      onChange(e){
          //v-switch is emitting null when it is off, need to convert it to false to set correct boolean value.
          if(e===null){
              e = false;
          }
          this.$emit('fieldChange',{value:e, objKey:this.objKey, id:this.id})
      }
  }
};
</script>