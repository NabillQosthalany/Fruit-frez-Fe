<script setup>
import {ref} from 'vue'
defineProps(['showAlert'])
</script>
<template>
  <v-alert
    v-if="showAlert"
    type="error"
    dismissible
    @input="showAlert = false">
    Anda Belum Login
  </v-alert>
</template>
