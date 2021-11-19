<template>
  <div>
    <v-img
      :src="background"
      style="
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;
      "
    >
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card class="cardColor">
          <v-card-title class="teal white--text title">Login</v-card-title>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row class="py-4">
              <v-col cols="10" offset="1">
                <v-text-field
                  id="Username"
                  v-model="credentials.UserName"
                  name="UserName"
                  label="User Name"
                  :rules="usernameRules"
                />
              </v-col>

              <v-col cols="10" offset="1">
                <v-text-field
                  id="Password"
                  v-model="credentials.Password"
                  name="Password"
                  label="Password"
                  :rules="passwordRules"
                  :append-icon="passwordVisible ? 'mdi-eye' : 'mdi-eye-off'"
                  :append-icon-cb="() => (passwordVisible = !passwordVisible)"
                  :type="passwordVisible ? 'password' : 'text'"
                  @click:append="passwordVisible = !passwordVisible"
                />
              </v-col>

              <v-col cols="10" offset="1">
                <v-btn
                  id="Login"
                  name="Login"
                  label="Login"
                  :disabled="!valid"
                  color="teal"
                  @click="submit"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col></v-img
    >
    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" hide-overlay persistent width="300">
          <v-card color="teal" dark>
            <v-card-text>
              Loging in...
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>
<script>
  const img = require("../assets/background2.jpg");
  import Vue from "vue";
  import VueSweetalert2 from "vue-sweetalert2";

  // If you don't need the styles, do not connect
  import "sweetalert2/dist/sweetalert2.min.css";

  Vue.use(VueSweetalert2);
  // import { authApi } from "@/api/auth";
  export default {
    name: "login-form",
    data: () => ({
      valid: true,
      background: img,
      credentials: {
        UserName: "",
        Password: "",
      },
      usernameRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      passwordRules: [(v) => !!v || "Password is required"],
      passwordVisible: true,
      dialog: false,

      // rules: {
      //   required: value => !!value || "Required.",
      //   email: value => {
      //     const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //     return pattern.test(value) || "Invalid e-mail.";
      //   }
      // }
    }),
    watch: {
      dialog(val) {
        if (!val) return;

        setTimeout(() => (this.dialog = false), 2000);
      },
    },
    mounted() {},
    methods: {
      submit() {
        if (!this.credentials.UserName && !this.credentials.Password) {
          alert("Please enter username/password");
        } else {
          this.dialog = true;
          var username = this.credentials.UserName;
          var password = this.credentials.Password;
          var validEmail = this.$store.state.username;
          var validPassword = this.$store.state.password;
          var action = this.$store;
          let path = this.$router;
          let alrt = this.$swal;
          setTimeout(function () {
            // console.log(a);
            if (username === validEmail && password === validPassword) {
              alrt("Logged In", "You logged in successfully", "success");
              path.push("/home");
              action.dispatch("isLogedIn", true);
            } else {
              alrt(
                "Invalid credentials?",
                "Please enter valid username/password.",
                "warning"
              );
            }
          }, 2000);
        }
      },
    },
  };
</script>

<style>
  .cardColor {
    margin-top: 25%;
    background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important;
  }
</style>
