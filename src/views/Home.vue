<template>
  <div>
    <section class="about-us-section full-vh px-10 mt10" ref="aboutUs">
      <v-container>
        <h2 class="about-us-section__title text-h2 my-4" ref="aboutUsTitle">
          Our speakers
        </h2>
        <p>Practice your language skills natively</p>
        <div>
          <v-chip
            v-for="l in allLang"
            @click="switchLang(l)"
            class="mr-3"
            :key="l"
            >{{ l }}</v-chip
          >
          <v-chip @click="switchLang('')">All</v-chip>
        </div>
      </v-container>

      <List :items="filteredTeachers">
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
import { mapGetters } from 'vuex'
export default {
  components: { List, CardBrief, CardTeacher },
  data() {
    return {
      selectedLang: ''
    }
  },
  computed: {
    ...mapGetters(['teachers']),
    filteredTeachers() {
      if (this.selectedLang) {
        return this.teachers.filter(
          (t) => t.nativeLanguage === this.selectedLang
        )
      }
      return this.teachers
    },
    allLang() {
      const langs = this.teachers.map((t) => t.nativeLanguage)
      return [...new Set(langs)]
    }
  },
  methods: {
    switchLang(l) {
      this.selectedLang = l
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
  overflow: scroll;
  margin-top: 64px;
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
