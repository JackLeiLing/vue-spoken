<template>
  <v-container>
    <v-row>
      <v-col v-for="i in items" :key="i.id" cols="12" sm="6" md="6" lg="3">
        <slot name="item" :item="i"> </slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array
    }
  }
}
</script>
