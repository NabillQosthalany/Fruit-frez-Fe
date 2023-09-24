<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const {sidebarOpen} = defineProps({
  sidebarOpen:{
    type:Boolean
  }
})
const itemMenu = ref([
  {icon: 'mdi-view-dashboard', title: 'Overview', value: 'Dashboard'},
  {icon: 'mdi-package-variant-closed', title: 'Product', value: 'Product'},
  {icon: 'mdi-account', title: 'Account', value: 'Account'}
])
const logOut = () =>{
  localStorage.removeItem('token')
  router.push('/')
}
</script>
<template>
  <v-navigation-drawer
      v-if="sidebarOpen"
      app
      class="sidebar-drawer rounded-xl ml-3 my-3"
      color="#4D2DB7"
      theme="dark"
      style="height: calc(100vh - 25px);position: fixed"
  >
    <v-list color="black">
      <h1 class="mx-5 mt-5 mb-2">Fruit Frez</h1>
      <v-divider class="mb-5" color="white" :thickness="5"/>
      <v-list-item v-for="(item,index) in itemMenu"
                   :key="index"
                   :prepend-icon="item.icon"
                   :title="item.title"
                   :class="{'active' : $route.path === `/${item.value}` }"
                   :to="`/${item.value}`"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2 mb-5">
        <v-btn color="#4D2DB7" variant="flat" block="">
          <v-icon @click="logOut" class="mr-5">mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<style scoped lang="scss">
@import url(sidebar.scss);
</style>
