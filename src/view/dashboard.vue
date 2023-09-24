<script setup>
import {onMounted, ref} from 'vue'
import Sidebar from "../components/Sidebar/Sidebar.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import Barchart from "../components/Chart/Barchart.vue";
import axios from "axios";
import Card from "../components/Card/Card.vue";

const sidebarOpen = ref(true)
const priceItemCard = ref([
  {subtitle: 'Amount Of Income', img: '../src/assets/images/Product-stock.png', text: '25 Stock Product'},
  {subtitle: 'Total of Amount', img: '../src/assets/images/Item-stock.png', text: '25 Stock Product'},

])
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
const totalProduct = ref(null)
onMounted(()=>{
  const token = localStorage.getItem('token')
  axios.get('http://localhost:4000/products/total-stock',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
      .then((response) =>{
        totalProduct.value = response.data.totalStock
      })
      .catch((err)=>{
        console.log(err)
      })
})
</script>

<template>
  <section>
    <Sidebar :sidebarOpen="sidebarOpen"/>
    <v-container fluid>
      <Navbar :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar"/>
      <v-row class="ml-2">
        <v-col cols="3">
         <Card product-name="Total Product" :total-product="totalProduct" />
        </v-col>
        <v-col cols="9" class="pb-0">
          <v-card class="rounded-lg"
          >
            <v-card-text class="text-h5 font-weight-bold">Top Product</v-card-text>
            <v-card color="#F9F9F9" class="ma-2" height="95">
              <v-card-text class="pb-2 text-h6 font-weight-medium">1.Watermelon</v-card-text>
              <v-card-subtitle>Owner : John Mokuton</v-card-subtitle>
              <v-card-subtitle class="text-subtitle-2">Sold as product : 299 Product</v-card-subtitle>
            </v-card>
            <v-card color="#F9F9F9" class="ma-2" height="95">
              <v-card-text class="pb-2 text-h6 font-weight-medium">1.Watermelon</v-card-text>
              <v-card-subtitle>Owner : John Mokuton</v-card-subtitle>
              <v-card-subtitle class="text-subtitle-2">Sold as product : 299 Product</v-card-subtitle>
            </v-card>
            <v-card color="#F9F9F9" class="ma-2" height="95">
              <v-card-text class="pb-2 text-h6 font-weight-medium">1.Watermelon</v-card-text>
              <v-card-subtitle>Owner : John Mokuton</v-card-subtitle>
              <v-card-subtitle class="text-subtitle-2">Sold as product : 299 Product</v-card-subtitle>
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="3" class="pb-0">
          <div class="amount-card">
            <v-row>
              <v-col v-for="(item,index) in priceItemCard" :key="index" cols="12">
                <v-card width="250" height="150" class="mb-12 rounded-lg d-flex flex-column align-start">
                  <div class="d-flex justify-between align-center mt-3">
                    <v-card-subtitle class="mr-2">{{ item.subtitle }}</v-card-subtitle>
                    <v-img width="35" :src="item.img"/>
                  </div>
                  <v-card-text class="mt-4 text-h5 font-weight-bold">{{ item.text }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col cols="12" class="pt-0">
          <v-card class="rounded-lg">
            <Barchart/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped>
/*div{*/
/*  background-color: #F2F2F2 !important;*/
/*}*/
</style>
