<template>
  <v-container
    fluid
    class="white--text mt-12 d-flex align-center flex-column justify-center chat-room"
  >
    <div>
      <v-row>
        <v-col class="d-flex justify-space-between align-center">
          <h1 class="my-3">Speak to {{ teacher.firstName }}</h1>
          <div>
            <v-btn
              @click="getPermissions()"
              fab
              class="mr-5"
              color="blue darken-3"
              small
            >
              <v-icon color="white" size="25">mdi-video-account</v-icon>
            </v-btn>
            <v-btn @click="finish()" color="orange darken-3" fab small
              ><v-icon color="white" size="25">mdi-close</v-icon></v-btn
            >
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <img class="vedio" :src="teacher.image" :alt="teacher.firstName" />
        </v-col>
        <v-col cols="12" md="6">
          <video class="vedio" playsinline autoplay ref="myVideo"></video>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TeacherView',

  computed: {
    teacherID() {
      return this.$route.params.id
    },
    teacher() {
      let id = this.$route.params.id
      return this.$store.getters.getTeacherByID(id)
    }
  },
  methods: {
    getPermissions() {
      this.status = 'FETCHING'
      navigator.mediaDevices
        .getUserMedia({
          video: true,
          audio: true
        })
        .then(
          (stream) => {
            this.status = 'DONE FETCHING'
            this.handleSuccess(stream)
          },
          (err) => {
            console.error(err)
          }
        )
    },
    handleSuccess(stream) {
      const video = this.$refs.myVideo
      video.srcObject = stream
    },
    finish() {
      this.$refs.myVideo.srcObject = null
      this.$router.history.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-room {
  height: 100vh;
}
.vedio {
  width: 100%;
  height: auto;
  aspect-ratio: 2 / 1;
  object-fit: cover;
  border: 1px solid white;
  border-radius: 5px;
}
</style>
