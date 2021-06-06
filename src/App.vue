<template>
  <v-app id="app-spoken">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      color="blue"
      app
      dark
      src="http://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Spoken</v-list-item-title>
          <v-list-item-subtitle>with Native speakers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid class="pt-0 pb-0">
      <v-row>
        <v-app-bar
          dark
          :extended="barExtended"
          class="text--white"
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
          fixed
        >
          <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

          <v-toolbar-title>Spoken</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

                <!-- Check that the SDK client is not currently loading before accessing is methods -->
          <span v-if="!$auth.loading">
            <!-- show login when not authenticated -->
            <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
            <!-- show logout when authenticated -->
            <span v-if="$auth.isAuthenticated">
            <v-avatar>
              <img
                :src="$auth.user.picture"
                :alt="$auth.user.name"
              />
            </v-avatar>
            <button  
            class="pl-2"
            @click="logout"
            >Log out</button>
            
            
          </span>
          </span>
        </v-app-bar>
      </v-row>
    </v-container>

    <v-container class="pa-0">
      <v-row class="pt-16">
        <router-view />
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => {
    return {
      drawer: false,
      barExtended: false,
      items: [
        { title: "Home", icon: "mdi-home", link: "/" },
        { title: "Teachers", icon: "mdi-teach", link: "/teachers" },
        { title: "Students", icon: "mdi-school", link: "/students" },
        { title: "Classes", icon: "mdi-account-group", link: "/classes" }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
     // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  },

  created() {
    this.$store.dispatch("getTeachers");
  }
};
</script>
<style lang="scss">
@import "@/scss/app.scss";
#app-spoken {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  background-size: cover;
}
</style>
