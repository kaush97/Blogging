<template>
  <v-card class="mx-auto">
    <v-list three-line>
      <v-subheader :key="index">All Blogs</v-subheader>
      <template v-for="(item, index) in items">
        <v-divider :key="index"></v-divider>

        <v-list-item :key="index">
          <v-list-item-avatar>
            <v-img src="../assets/blog.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              class="black--text"
              v-html="item.title"
            ></v-list-item-title>
            <v-list-item-subtitle v-html="item.subTitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [],
    }),
    created() {
      let a = this.$store.state.blogs;
      this.items = a.filter(
        (item) => item.createdBy == this.$store.state.username
      );
      console.log(this.items);
    },
  };
</script>
