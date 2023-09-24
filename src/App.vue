<template>
  <v-app>
    <v-main>
      <router-view/>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',



  data: () => ({
    //
  }),
}
</script>
<style>
.v-application__wrap{
  background-color: #F2F2F2 !important;
}
</style>
