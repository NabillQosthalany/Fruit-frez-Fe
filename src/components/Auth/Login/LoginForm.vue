<script setup>
import {useRouter} from 'vue-router'
import {ref} from "vue";
import axios from "axios";
import {useAuthStore} from '../../../store/auth.js'

const router = useRouter()
const authStore = useAuthStore()
const form = ref({
  username: '',
  password: ''
})

const showAlert = router.currentRoute.value.query.message === 'unauthenticated';
const login = async () => {
  try {
    const response = await axios.post('http://localhost:4000/auth/login', {
      username: form.value.username,
      password: form.value.password
    })
    const userData = response.data
    const token = response.data.token
    localStorage.setItem('token', token)
    authStore.setUserData(userData)
    router.push('/Dashboard')
    console.log('Success Login')
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card-text class="mt-12">
        <div class="text-center text-red" v-if="showAlert">
          <p>Anda belum login.</p>
        </div>
        <h4 class="text-center text-h5 font-weight-bold">Login in to your account</h4>
        <p class="text-center grey--text text-caption font-weight-light">Log in to our account so you can continue
          building
          <br>and editing you onboarding flows
        </p>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8">
            <v-form @submit.prevent="login">
              <v-text-field variant="outlined" v-model="form.username" label="Username" type="Text" dense color="blue"
                            class="mt-6"/>
              <v-text-field variant="outlined" v-model="form.password" label="Password" type="Password" dense
                            color="blue"/>
              <v-row>
                <v-col cols="12" sm="7">
                  <v-checkbox label="Remember Me" class="mt-n1" color="blue"/>
                </v-col>
                <v-col cols="12" sm="5" class="d-flex align-center mb-7">
                  <span class="text-caption text-blue">Forget Password</span>
                </v-col>
              </v-row>
              <v-btn type="submit" class="btn-auth" block title>Login in</v-btn>
              <h5 class="text-center text-grey mt-4 mb-3">Or Log in using</h5>
              <div class="d-flex justify-space-between align-center mx-10 mb-16">
                <v-btn depressed outlined color="#f0f0f0">
                  <v-icon color="red">mdi-google</v-icon>
                </v-btn>
                <v-btn depressed outlined color="#f0f0f0">
                  <v-icon color="blue">mdi-facebook</v-icon>
                </v-btn>
                <v-btn depressed outlined color="#f0f0f0">
                  <v-icon color="#42A5F5">mdi-twitter</v-icon>
                </v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-col>
    <v-col cols="12" sm="6" class="rounded-bl-xl-left">
      <div style="text-align: center;padding: 180px 0;">
        <v-card-text class="text-white">
          <h3 class="text-center text-h5">Dont Have an account?</h3>
          <h6 class="text-center text-subtitle-2 font-weight-light">Let's get you all set up so you can start
            creating</h6>
        </v-card-text>
        <div class="text-center">
          <v-btn color="white" title variant="outlined" dark @click="$emit('signUp')">Sign Up</v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
@import url(login.css);

</style>
