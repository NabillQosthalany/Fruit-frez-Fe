<script setup>
import {onMounted, ref} from 'vue'
import Sidebar from "../components/Sidebar/Sidebar.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import Barchart from "../components/Chart/Barchart.vue";
import axios from "axios";
import CardStock from "../components/Overview/Card/CardStock.vue";

const sidebarOpen = ref(true)
const priceItemCard = ref([
  {subtitle: 'Amount Of Income', img: '../src/assets/images/Product-stock.png', text: '25 Stock Product'},
  {subtitle: 'Total of Amount', img: '../src/assets/images/Item-stock.png', text: '25 Stock Product'},

])
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
const totalProduct = ref([])
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
          <CardStock subtitle="Total Stock Product" img="../src/assets/images/Item-Stock.png" :text="totalProduct"/>
          <CardStock subtitle="Total Stock Product" img="../src/assets/images/Item-Stock.png" :text="totalProduct"/>
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
