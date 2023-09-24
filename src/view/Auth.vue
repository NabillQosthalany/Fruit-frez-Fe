<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <LoginForm @signUp="step++"/>
            </v-window-item>
            <v-window-item :value="2">
              <RegisterForm @signIn="step--"/>
            </v-window-item>
          </v-window>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import LoginForm from "../components/Auth/Login/LoginForm.vue";
import RegisterForm from "../components/Auth/Register/RegisterForm.vue";
export default {
  components: {RegisterForm, LoginForm},
  data: () => ({
    step:1
  }),
  props:{
    source:String
  }

}
</script>
<style scoped>
</style>
