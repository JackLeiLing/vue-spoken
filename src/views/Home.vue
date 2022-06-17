<template>
  <div class="full-width">
    <section class="about-us-section full-vh px-10" ref="aboutUs">
      <h2 class="about-us-section__title text-h1" ref="aboutUsTitle">
        Spoken
      </h2>
      <p>Practice your language skills with native speakers</p>
      <List :items="teachers">
        <template v-slot:item="{ item }">
          <card-brief :item="item" />
        </template>
      </List>
    </section>
  </div>
</template>

<script>
import List from '@/components/List'
import CardBrief from '@/components/CardBrief'
import CardTeacher from '@/components/CardTeacher'
export default {
  components: { List, CardBrief, CardTeacher },
  computed: {
    teachers() {
      return this.$store.state.teachers
    }
  }
}
</script>

<style lang="scss" scoped>
.full-vh {
  height: calc(100vh - 64px);
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
  border-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.about-us-section {
  background-image: radial-gradient(
      circle,
      rgba(2, 0, 36, 0.116) 0%,
      rgb(25, 25, 173) 100%
    ),
    url(../assets/beach.jpg);
  background-size: cover;
  background-position: center;
  &__title {
    font-family: 'Shrikhand', cursive;
    font-size: 3rem;
  }
}

#teachers-section {
  background-image: radial-gradient(
      circle,
      rgba(2, 0, 36, 0.116) 0%,
      rgb(25, 25, 173) 100%
    ),
    url(../assets/teacher.jpg);
  background-size: cover;
  background-position: center;
}

#students-section {
  background-image: radial-gradient(
      circle,
      rgba(2, 0, 36, 0.116) 0%,
      rgb(25, 25, 173) 100%
    ),
    url(../assets/beach-people.jpg);
  background-size: cover;
  background-position: center;
}
</style>
