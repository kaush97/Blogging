<template>
  <v-app id="background">
    <v-list color="" style="background: inherit" v-if="isMobile">
      <template v-for="(n, i) in nav">
        <v-list-item v-if="n.to" :key="`${i}-a`" :to="n.to" link>
          <v-list-item-icon>
            <v-icon small>{{ n.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ n.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          v-if="n.subItems"
          :key="`${i}-b`"
          :prepend-icon="`${n.icon} fa-em`"
          v-model="n.active"
          append-icon="fas fa-chevron-down fa-sm"
        >
          <v-list-item
            @click="
              loginPage();
              n.active = false;
            "
            class="pl-8 red--text"
          >
            <v-list-item-icon>
              <v-icon small>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>

    <div v-else>
      <v-app-bar v-if="scroll" height="80" app color="white" dark>
        <div class="d-flex align-center teal--text">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 mt-1"
            contain
            min-width="60"
            src="../assets/blog.png"
            transition="scale-transition"
            width="60"
          />
          Blogger
        </div>

        <v-spacer></v-spacer>
        <v-btn @click.prevent="loginPage" text>
          <span class="mr-2 mt-1 text">Login</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </v-app-bar>
      <v-app-bar
        v-else
        color=""
        style="background: linear-gradient(to right, #000428 0%, teal 100%)"
        dark
        app
        elevation="0"
      >
        <div class="">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 mt-7"
            contain
            min-width="60"
            src="../assets/blog.png"
            transition="scale-transition"
            width="60"
          />Blogger
        </div>

        <v-spacer></v-spacer>
        <v-btn @click="loginPage" text>
          <span class="mr-2">Login</span>
        </v-btn>
      </v-app-bar>
    </div>

    <v-main><BlogHome /></v-main> <BlogsPage />
  </v-app>
</template>

<script>
  import BlogHome from "../views/BlogHome.vue";
  import BlogsPage from "../views/BlogsPage.vue";

  //   import Home from "../views/Home";
  //   import About from "../views/About";
  //   import Footer from "../views/Footer";
  //   import Category from "../views/Category.vue";
  //   import Dialog from "./Dialog.vue";
  //   import Dialog2 from "./Dialog2.vue";

  export default {
    name: "App",
    components: {
      BlogHome,
      BlogsPage,
      //   Home,
      //   About,
      //   Footer,
      //   Category,
      //   Dialog,
      //   Dialog2,
    },
    data: () => ({
      //
      nav: [
        {
          to: "",
          label: "",
          icon: "mdi-menu",
          active: false,
          subItems: [
            { to: "", label: "Home", icon: "mdi-home" },
            { to: "", label: "Get in Touch", icon: "mdi-link" },
            { to: "", label: "Content Creator", icon: "mdi-account" },
            //  {to:'',label:'link1-sub1',icon:'mdi-link'},
          ],
        },
      ],
      mainSidebarDrawer: true,
      mini: true,
      scroll: false,
      drawer: false,
      group: null,
    }),
    methods: {
      loginPage() {
        this.$router.push("/mainpage");
      },
    },

    computed: {
      isMobile() {
        return this.$vuetify.breakpoint.xsOnly;
      },
    },
    mounted() {
      window.onscroll = () => {
        if (window.scrollY > 10) {
          this.scroll = true;
        } else {
          this.scroll = false;
        }
      };
    },
  };
</script>

<style scoped>
  .text {
    color: black;
    font-weight: bold;
  }

  #background {
    /* background-color: white; */
    /* background-image: url('http://www.canvaz.com/portrait/charcoal-1.jpg'); */
    background-size: 100%;
    /* background-repeat: no-repeat; */
    /* background-position: auto; */
    /* The image used */
    /* background-image: url("https://crypticocean.com/assets/img/hero-bg.jpg"); */
    /* background-image: url('./assets/bg.jpg'); */

    background-repeat: no-repeat;
    background: linear-gradient(to right, #000428 0%, teal 100%);
    position: relative;
  }
  li {
    display: inline;
    text-decoration: none;
    padding: 0px;
    color: white;
  }
</style>
