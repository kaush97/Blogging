<template>
  <div class="mx-auto overflow-hidden">
    <v-app-bar color="teal" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Blogs</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="logout"><v-icon>mdi-logout</v-icon> Logout </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      style="box-shadow: 1px 0 5px -2px #888"
      color=""
      app
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="teal">
            <v-list-item-content class="ListItem">
              <v-list-item-title class="text-h6"> BLOG </v-list-item-title>
              <v-list-item-subtitle class="ListItem">
                Create your own blog
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-btn
            class="ma-2 mt-8 mb-8 ml-10 vert-move"
            rounded
            outlined
            color="teal"
            @click="(show = true), (drawer = !drawer)"
          >
            <v-icon left> mdi-plus </v-icon>
            NEW POST
          </v-btn>
          <v-divider></v-divider>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="black--text">Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="black--text">Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-card v-if="show">
      <v-toolbar elevation="0" color="">
        <v-spacer></v-spacer>
        <v-btn
          class="hidden-sm-and-down"
          icon
          dark
          @click="(show = false), (drawer = !drawer)"
        >
          <v-icon class="black--text">mdi-close</v-icon>
        </v-btn>
        <v-btn class="hidden-lg-and-up" icon dark @click="show = false">
          <v-icon class="black--text">mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <RichTextEditor class="mr-3 ml-3" />
    </v-card>
    <!-- <RichTextEditor class="ml-3 mr-3 mt-3" v-if="show" /> -->

    <BlogList v-else />
  </div>
</template>
<script>
  // import Editor from "../views/Editor.vue";
  import BlogList from "../views/BlogList.vue";
  import RichTextEditor from "../views/RichTextEditor.vue";

  export default {
    data: () => ({
      drawer: true,
      group: null,
      show: false,
    }),
    methods: {
      logout() {
        this.$router.push("/login");
        this.$store.dispatch("isLogedIn", false);
      },
    },
    components: {
      // Editor,
      BlogList,
      RichTextEditor,
    },
  };
</script>
<style scoped>
  .ListItem {
    color: #fff !important;
  }
  .vert:hover {
  }
  .vert-move:hover {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  .vert-move:hover {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-5px);
    }
  }
</style>
