<script setup>
import Sidebar from "../../components/Sidebar/Sidebar.vue";
import Navbar from "../../components/Navbar/Navbar.vue";
import {computed, onMounted, ref} from "vue";
import InputField from "../../components/Input/InputField.vue";
import Swal from "sweetalert2";
import {addData, editData, fetchDataProduct,deleteDataProduct} from "../../service/api/product.js";

const editedIndex = ref(null)
const sidebarOpen = ref(true)
const dialog = ref(false)
const fruitData = ref([])
// Sidebar
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
// Dialog
const closeDialog = () => {
  dialog.value = false
  setTimeout(() => {
    postFruit.value = Object.assign({}, fruit.value)
  }, 300)
}
//Product
const saveDialog = computed(() => {
  return editedIndex.value === -1 ? 'Edit' : 'Save'
})
const fruit = ref({
  productId: null,
  productName: '',
  productDesc: '',
  productPrice: 0,
  productStock: 0
})
const postFruit = ref(fruit)
const fetchData = async () => {
  try {
    fruitData.value = await fetchDataProduct()
  } catch (err) {
    console.log(err)
  }
}
const savePost = async () => {
  if (editedIndex.value === -1) {
    await updateData()
  } else {
    await createData()
  }
}
const createData = async () => {
  try {
    const data = await addData(postFruit.value)
    closeDialog()
    Swal.fire({
      icon: 'success',
      title: 'Success Added Data',
      showConfirmButton: false,
      timer: 1500
    })
    fruitData.value.push(data)
  } catch (err) {
    console.log(err)
  }
}
const updateData = async () => {
  editedIndex.value = 1
  try {
    const data = await editData(postFruit.value)
    closeDialog()
    Swal.fire({
      icon: 'success',
      width: 400,
      position: 'top-end',
      title: 'Success Edited Data',
      showConfirmButton: false,
      timer: 1500
    })
    await fetchData()
  } catch (err) {
    console.log(err)
  }
}
const deleteData = async (id) => {
  try {
    const data = await deleteDataProduct(id)
    Swal.fire({
      icon: 'success',
      title: 'Success Deleted Data',
      showConfirmButton: false,
      timer: 1500
    })
    fetchData()
  } catch (err) {
    console.log(err)
  }
}
const getItem = (item) => {
  editedIndex.value = -1
  dialog.value = true
  postFruit.value.productId = item._id
  postFruit.value.productName = item.name;
  postFruit.value.productDesc = item.description;
  postFruit.value.productPrice = item.price;
  postFruit.value.productStock = item.stock;
}
onMounted(fetchData)

</script>
<template>
  <section>
    <Sidebar :sidebarOpen="sidebarOpen"/>
    <Navbar :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar"/>
    <v-toolbar color="#f2f2f2" elevation="0" height="70" class="mt-5">
      <h1 class="ml-7">All Product</h1>
      <v-spacer></v-spacer>
      <v-text-field
          label="Search.."
          color="blue"
          class="pt-5 mt-3 rounded"
          prepend-inner-icon="mdi-magnify"
          solo
          rounded
          variant="outlined"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn dark prepend-icon="mdi-filter" class="mt-3" border color="blue"> Filter</v-btn>
      <v-btn dark prepend-icon="mdi-export-variant" class="mt-3 ml-5" border color="blue"> Export</v-btn>
      <v-btn dark prepend-icon="mdi-plus" class="mt-3 ml-4" border color="blue" @click="dialog = true"
      > Add Product
        <v-dialog
            v-model="dialog"
            width="auto"
        >
          <v-card width="500">
            <v-card-title>
              <span class="headline">{{ saveDialog }}</span>
            </v-card-title>
            <v-container>
              <v-form @submit.prevent="savePost">
                <v-row>
                  <v-col cols="6">
                    <InputField v-model="postFruit.productName"/>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field variant="outlined" type="text" color="blue" label="Product Desc"
                                  v-model="postFruit.productDesc"/>

                  </v-col>
                  <v-col cols="6">
                    <v-text-field variant="outlined" type="text" color="blue" label="Product Price"
                                  v-model="postFruit.productPrice"/>

                  </v-col>
                  <v-col cols="6">
                    <v-text-field variant="outlined" type="text" color="blue" label="Product Stock"
                                  v-model="postFruit.productStock"/>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn
                      color="#3c3a47"
                      dark
                      @click="closeDialog"
                      outlined
                      small>
                    <v-icon left></v-icon>
                    Close
                  </v-btn>
                  <v-btn color="light-green darken-4" dark type="submit" outlined small>
                    <v-icon left>save</v-icon>
                    {{ saveDialog }}
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="3" v-for="item in fruitData" :key="item.id">
          <v-card class="rounded-xl pb-2 ml-2" max-width="200">
            <v-row>
              <v-col cols="8">
                <v-img class="ml-3 mt-2" width="50" src="../src/assets/images/apple.png"/>
              </v-col>
              <v-col cols="4">
                <v-menu width="200">
                  <template v-slot:activator="{ props }">
                    <v-btn flat icon="mdi-dots-vertical" v-bind="props"/>
                  </template>
                  <v-list>
                    <v-list-item prepend-icon="mdi-pencil" title="Edit" @click="getItem(item)">
                    </v-list-item>
                    <v-list-item prepend-icon="mdi-delete" title="Delete" @click.prevent="deleteData(item._id)">
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>
            <v-card-text class="text-h5 font-weight-bold">
              {{ item.name }}
            </v-card-text>
            <v-card-subtitle>Desc: {{ item.description }}</v-card-subtitle>
            <v-card-subtitle>Price : {{ item.price }}</v-card-subtitle>
            <v-card-subtitle>Stock Product : {{ item.stock }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped lang="scss">
@import url(product.scss);
</style>

