<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2 mt-8 mb-8 ml-0 vert-move"
          rounded
          outlined
          color="teal"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left> mdi-plus </v-icon>
          NEW POST
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="teal">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-divider></v-divider>
        <RichTextEditor />
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  import RichTextEditor from "./RichTextEditor.vue";
  export default {
    data() {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
      };
    },
    components: {
      RichTextEditor,
    },
  };
</script>
