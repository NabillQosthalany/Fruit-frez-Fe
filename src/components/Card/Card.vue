<script setup>
const props = defineProps({
  productName : {
    type:String,
    required:true
  },
  totalProduct:{
    required:true
  }
})
</script>
<template>
  <v-card width="250" height="150" class="rounded-lg d-flex flex-column align-start">
    <div class="d-flex justify-between align-center mt-3">
      <v-card-subtitle class="mr-2">{{productName}}</v-card-subtitle>
      <v-img width="35" src="../src/assets/images/Item-stock.png"/>
    </div>
    <v-card-text class="mt-4 text-h5 font-weight-bold">Total Product {{totalProduct}}</v-card-text>
  </v-card>
</template>
