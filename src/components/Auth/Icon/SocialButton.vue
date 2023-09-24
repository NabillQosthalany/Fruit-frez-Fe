<template>
  <v-btn depressed outlined color="#f0f0f0">
    <v-icon :color="color">{{ iconName }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "SocialButton",
  props: {
    color: String,
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
