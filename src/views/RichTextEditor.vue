<template>
  <div id="defaultRTE">
    <v-text-field
      color="teal"
      label="Title"
      height="32"
      :rules="rules"
      v-model="title"
      hide-details="auto"
    ></v-text-field>
    <v-text-field
      color="teal"
      label="Sub-title"
      height="32"
      :rules="rules"
      v-model="subTitle"
      hide-details="auto"
    ></v-text-field>

    <ejs-richtexteditor
      class="mt-2"
      v-model="val"
      ref="defaultRTE"
      :height="height"
    >
    </ejs-richtexteditor>
    <div>
      <v-row>
        <v-col class="d-flex justify-start">
          <!-- <v-btn class="ma-2 mt-8 mb-8 vert-move" color="" @click="submit">
            <v-icon left> mdi-close </v-icon>
            Close
          </v-btn> -->
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn
            class="ma-2 mt-8 mb-8 ml-9 white--text vert-move"
            color="teal"
            @click="submit"
          >
            <v-icon left> mdi-send </v-icon>
            Publish
          </v-btn></v-col
        ></v-row
      >
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import {
    RichTextEditorPlugin,
    Toolbar,
    Link,
    Image,
    Count,
    HtmlEditor,
    QuickToolbar,
  } from "@syncfusion/ej2-vue-richtexteditor";

  Vue.use(RichTextEditorPlugin);

  export default {
    data() {
      return {
        val: "",
        height: "350px",
        title: "",
        subTitle: "",
        rules: [
          (value) => !!value || "Required.",
          (value) => (value && value.length >= 3) || "Min 3 characters",
        ],
      };
    },
    methods: {
      submit() {
        console.log(this.val, "value");
        let data = {
          title: this.title,
          subTitle: this.subTitle,
          data: this.val,
          createdBy: this.$store.state.username,
          avatar: `https://source.unsplash.com/random?${this.title}`,
        };
        this.$store.dispatch("postBlog", data);
        this.$router.push("/");
      },
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
    },
  };
</script>

<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>
<style scoped>
  .v-text-field--outlined fieldset {
    color: red !important;
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
