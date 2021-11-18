<template>
  <v-app>
    <v-main>
      <!-- <Login v-if="user" /> -->
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
  // import func from "vue-editor-bridge";
  // import Login from "./views/Login.vue";

  export default {
    name: "App",

    data: () => ({
      //
    }),
    computed: {
      // user() {
      //   return this.$store.state.isLogedIn;
      // },
    },
    components: {
      // Login,
    },
  };
</script>
<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
  * {
    font-family: "Montserrat", sans-serif;
  }
</style>
