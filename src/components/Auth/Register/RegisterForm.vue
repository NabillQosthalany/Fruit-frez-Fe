<template>
  <v-row>
    <v-col cols="12" sm="6" class="rounded-br-xl-right">
      <div style="text-align: center; padding: 180px 0 ;">
        <v-card-text class="text-white">
          <h3 class="text-center text-h5 font-weight-bold">Already signed up?</h3>
          <h6 class="text-center text-subtitle-2 font-weight-light">Sign in you account</h6>
        </v-card-text>
        <div class="text-center">
          <v-btn title variant="outlined" color="white" @click="$emit('signIn')">Sign In</v-btn>
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card-text class="mt-12">
        <h4 class="text-center text-h5 font-weight-bold">Sign in for an accout</h4>
        <h6 class="text-center text-subtitle-2 font-weight-light">Let go you all</h6>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="6" class="pb-0">
            <v-text-field variant="outlined" label="Username" type="Text" dense color="blue" class="mt-6"/>
          </v-col>
          <v-col cols="12" sm="6" class="pb-0">
            <v-select
                label="Choose Your Role"
                color="blue"
                :items="items"
                variant="outlined"
                class="mt-6"
            ></v-select>
          </v-col>
          <v-col clos="12" sm="12" class="pt-0">
            <v-text-field label="Password" variant="outlined" dense color="blue"/>
            <v-text-field label="Accept Password" variant="outlined" dense color="blue"/>
          </v-col>
          <v-col cols="12" sm="12">
            <v-checkbox label="1 accept to slebew" class="mt-n1" color="blue"/>
          </v-col>
        </v-row>
        <v-btn class="btn-auth" color="#4D2DB7" block tile>Sign up</v-btn>
        <h5 class="text-center grey--text mt-4 mb-3">or sign up using</h5>
        <div class="d-flex justify-space-between align-center mx-10 mb-11">
          <SocialButton
              v-for="(socialMedia,index) in socialMediaData"
              :key="index"
              :icon-name="socialMedia.icon"
              :color="socialMedia.color"
          />
        </div>
      </v-card-text>
    </v-col>
  </v-row>

</template>

<script>
import {ref} from 'vue'
import SocialButton from "../Icon/SocialButton.vue";

export default {
  name: "RegisterForm",
  components: {SocialButton},
  props: {
    source: String
  },
  setup() {
    const step = ref(1)
    const items = ref([
      'Admin','User'
    ])
    const socialMediaData = ref([
      {icon: 'mdi-google', color: 'red'},
      {icon: 'mdi-facebook', color: 'blue'},
      {icon: 'mdi-telegram', color: 'blue'}
    ])
    return {
      step,
      socialMediaData,
      items,
    }
  },
}
</script>

<style scoped lang="scss">
@import url(register.scss);
</style>
