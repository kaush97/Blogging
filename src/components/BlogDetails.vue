<template>
  <div v-html="data"></div>
</template>
<script>
  export default {
    data() {
      return {
        data: "",
      };
    },
    created() {
      console.log(this.$route.params.id, "this.$route.params.id");
      let blogs = this.$store.state.blogs;
      let item = blogs.filter((item) => item.id == this.$route.params.id);
      console.log(item, "dafs");
      this.data = item[0].data;
    },
  };
</script>
