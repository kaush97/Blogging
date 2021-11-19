<template>
  <div style="text-align: center; margin-top: 10%; height: 100vh" class="">
    <v-col
      ><h1 class="white--text">
        Publish your blog, spread the knowledge.
      </h1></v-col
    >
    <v-col><span class="white--text">Create a unique blog</span></v-col>
    <v-col
      ><v-btn elevation="10" x-large class="vert-move" @click="loginPage"
        >CREATE YOUR BLOG</v-btn
      ></v-col
    >
    <v-col class="white--text">Explore more blogs</v-col>
    <v-col
      ><v-icon x-large color="white" class="vert-move mt-11"
        >mdi-chevron-double-down</v-icon
      ></v-col
    >
  </div>
</template>
<script>
  export default {
    methods: {
      loginPage() {
        this.$router.push("/mainpage");
      },
    },
  };
</script>
<style scoped>
  .vert-move {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  .vert-move {
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;
  }
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
</style>
