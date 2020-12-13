<template>
  <v-container>
    <v-row>
      <v-col v-for="i in items" :key="i.id">
        <slot name="item" :item="i"> </slot>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
    },
  },
};
</script>
