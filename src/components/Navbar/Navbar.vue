<script setup>
import {computed, onMounted} from 'vue'
import {useAuthStore} from "../../store/auth.js";

const authStore = useAuthStore()
const userData = computed(() => authStore.userData);
const username = computed(() => userData.value ? userData.value.username : '');
const userRole = computed(() => userData.value ? userData.value.role : '');


onMounted(() => {
  authStore.fetchDataUser();
});

const {sidebarOpen} = defineProps(['sidebarOpen','toggle-sidebar'])
const emit = defineEmits()
const toggleSidebar = () => {
  emit('toggle-sidebar')
}
const getUserInitials = () => {
  if(username && username.value.length >= 2){
    return username.value.substring(0,2).toUpperCase()
  }else{
    return ''
  }
}
const userInitials = computed(() =>{
  if (username.value){
    return getUserInitials(userData.value.username)
  }else{
    return '';
  }
})
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
      <v-menu
          min-width="200px"
          rounded
      >
        <template v-slot:activator="{ props }">
          <v-btn
              icon
              v-bind="props"
          >
            <v-avatar
                color="black"
                size="large"
            >
              <span class="text-h5">{{userInitials}}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar
                  color="black"
              >
                <span class="text-h5">{{userInitials}}</span>
              </v-avatar>
              <h3>{{username}}</h3>
              <p class="text-caption mt-1">
                Role :{{userRole}}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                  rounded
                  variant="text"
              >
                Edit Account
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<style scoped lang="scss">
@import url(navbar.scss);
</style>
