<template>
  <div class="hello">
    {{ teachers }}
  </div>
</template>

<script>
import teachersAPI from "api-client/teachers";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    teachersAPI.then(r => {
      this.teachers = r;
    });
  },
  data() {
    return {
      teachers: null
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
