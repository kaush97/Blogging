<template>
  <div style="">
    <v-carousel
      cycle
      height="100vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="card in items" :key="card.title">
        <v-sheet :color="colors[i]" height="100%">
          <!-- <v-row class="fill-height" align="center" justify="center">
            <v-col
              ><v-img height="80" width="80" src="../assets/blog.png"></v-img
            ></v-col>
            <v-col> <div v-html="slide.data"></div></v-col>
          </v-row> -->
          <v-container fluid>
            <v-row>
              <v-col>
                <v-card>
                  <v-img
                    :src="card.avatar"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="650"
                  >
                    <v-card-title v-text="card.title"></v-card-title>
                    <v-card-subtitle v-text="card.subTitle"></v-card-subtitle>
                    <v-card-subtitle
                      class="d-flex justify-end"
                      v-text="card.createdBy"
                    >
                    </v-card-subtitle>
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [],
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
          "red lighten-1",
          "deep-purple accent-4",
        ],
        slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      };
    },
    created() {
      console.log(this.$store.state.blogs);
      this.items = this.$store.state.blogs;
    },
  };
</script>
