<script setup>
import {computed, onMounted} from 'vue'
import {useAuthStore} from "../../store/auth.js";

const authStore = useAuthStore()
const userData = computed(() => authStore.userData);
const username = computed(() => userData.value ? userData.value.username : '');

onMounted(() => {
  authStore.fetchDataUser();
});

const {sidebarOpen} = defineProps(['sidebarOpen'])
const emit = defineEmits()
const toggleSidebar = () => {
  emit('toggle-sidebar')
}
</script>
<template>
  <v-app-bar app :elevation="0" height="100" min-width="59" color="#F2F2F2" class="rounded-xl ">
    <v-btn icon @click="toggleSidebar">
      <v-icon>{{ sidebarOpen ? 'mdi-menu-open' : 'mdi-menu' }}</v-icon>
    </v-btn>
    <div class="dashboard-text ma-5">
      <h1 class="text-h3 font-weight-bold mb-3">Dashboard</h1>
      <p class="text-subtitle-1 font-weight-light">Information About For The FruitViz</p>
    </div>
    <v-spacer />
    <div class="user-text mr-5">
      Hello,{{username}}
      <v-avatar color="surface-variant"></v-avatar>
    </div>
  </v-app-bar>
</template>
<style scoped lang="scss">
@import url(navbar.scss);
</style>
