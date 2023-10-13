<script setup>

const items = [
  {id: 1, text: 'Home'},
  {id: 2, text: 'About'},
  {id: 3, text: 'Services'},
  {id: 4, text: 'Slicing'},
  {id: 5, text: 'Product'},

]

</script>
<template>
  <v-app-bar flat="" color="transparent" scroll-off-screen>
    <v-toolbar-title>
      <v-img width="140" src="../src/assets/images/logo.png"/>
    </v-toolbar-title>
    <v-spacer/>
    <div class="d-flex flex-no-wrap mr-10 align-center">
      <v-list v-for="item in items" :key="item.id" class="bg-transparent">
        <v-list-item class="text-white">{{item.text}}</v-list-item>
      </v-list>
      <v-btn color="#2DB785" class="text-white rounded-lg" variant="flat">Sign in
        <v-menu activator="parent">
          <v-list>
            <v-list-item
            >
              <v-btn width="20" flat="">Admin</v-btn>
              <v-divider color="black"/>
              <v-btn width="20" flat="">User</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

    </div>
  </v-app-bar>
</template>
<style scoped lang="scss">
@import url(Navbar.scss);
</style>
