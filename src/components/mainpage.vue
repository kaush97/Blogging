<template>
  <div>
    <Login v-if="!user" />
    <Home v-else />
  </div>
</template>
<script>
  // import func from "vue-editor-bridge";
  import Login from "../views/Login.vue";
  import Home from "../components/Home.vue";

  //   import Login from "./components/Login.vue";

  export default {
    name: "App",

    data: () => ({
      //
    }),
    computed: {
      user() {
        return this.$store.state.isLogedIn;
      },
    },
    components: {
      Login,
      Home,
    },
  };
</script>
