 <template>
  <v-card
    class="mx-auto elevation-20"
    color="blue darken-1"
    dark
    style="max-width: 400px"
  >
    <v-row justify="space-between">
      <v-col cols="8">
        <v-card-title>
          <div>
            <div class="headline">Minecraft</div>
            <div>{{ item.firstName + " " + item.lastName }}</div>
            <div>{{ item.address.state }}</div>
          </div>
        </v-card-title>
      </v-col>
      <v-col cols="4">
        <v-img
          class="shrink ma-2"
          cover
          height="125px"
          :src="item.image"
          style="flex-basis: 125px"
        ></v-img>
      </v-col>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4">
      Rate this teacher
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ item.rating }})
      </span>
      <v-rating
        :value="item.rating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    item: Object,
  }


};
</script>