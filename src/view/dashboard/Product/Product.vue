<script setup>
import Sidebar from "../../../components/Sidebar/Sidebar.vue";
import Navbar from "../../../components/Navbar/Navbar.vue";
import {computed, onMounted, ref} from "vue";
import Swal from "sweetalert2";
import {addData, deleteDataProduct, editData} from "../../../service/api/product.js";
import CardProduct from "../../../components/Product/Card/CardProduct.vue";
import Dialog from "../../../components/Product/Dialog/Dialog.vue";
import NavbarProduct from "../../../components/Product/Navbar/NavbarProduct.vue";
import {useProductStore} from "../../../store/product.js";

const searchData = ref('')
const seacrhDataItem = computed(() =>{
  return fruitData.value.filter(item =>{
    return item.name.toLowerCase().includes(searchData.value.toLowerCase())
  })
})

/*Sidebar*/
const sidebarOpen = ref(true)
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

/*dialog*/
const dialog = ref(false)
const closeDialog = () => {
  dialog.value = false
  setTimeout(() => {
    Object.assign(postFruit, fruit)
  }, 300)
}
const saveDialog = computed(() => {
  return editedIndex.value === -1 ? 'Edit' : 'Save'
})

/*Data Product*/
const productStore = useProductStore()
const postFruit = productStore.postFruit
const fruit = productStore.fruits
const fruitData = computed(() => productStore.fruitData)
const editedIndex = ref(null)

/*Crud Method*/
const getItem = (item) => {
  editedIndex.value = -1
  dialog.value = true
  postFruit.productId = item._id
  postFruit.productName = item.name;
  postFruit.productDesc = item.description;
  postFruit.productPrice = item.price;
  postFruit.productStock = item.stock;
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
    const data = await addData(postFruit)
    closeDialog()
    fruitData.value.push(data)
    await productStore.getDataProduct()
    Swal.fire({
      icon: 'success',
      title: 'Success Added Data',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (err) {
    console.log(err)
  }
}
const updateData = async () => {
  editedIndex.value = 1
  try {
    await editData(postFruit)
    closeDialog()
    Swal.fire({
      icon: 'success',
      width: 400,
      position: 'top-end',
      title: 'Success Edited Data',
      showConfirmButton: false,
      timer: 1500
    })
    await productStore.getDataProduct()
  } catch (err) {
    console.log(err)
  }
}
const deleteData = async(id) =>{
  try {
    await deleteDataProduct(id)
    Swal.fire({
      icon: 'success',
      title: 'Success Deleted Data',
      showConfirmButton: false,
      timer: 1500
    })
    await productStore.getDataProduct()
  } catch (err) {
    console.log(err)
  }
}
onMounted( async() =>{
  await productStore.getDataProduct()
  fruitData.value = productStore.fruitData
})
</script>
<template>
  <section>
    <Sidebar :sidebarOpen="sidebarOpen"/>
    <Navbar :sidebarOpen="sidebarOpen" @toggle-sidebar="toggleSidebar"/>
    <NavbarProduct v-model="searchData" @dialog-event="dialog = true"/>
    <Dialog :edited-text="saveDialog" @save-post="savePost" v-model="dialog" @close-dialog="closeDialog"/>
    <v-container>
      <v-row>
        <v-col cols="3" v-for="item in seacrhDataItem" :key="item.id">
            <CardProduct @editData="getItem(item)" @deleteData="deleteData(item._id)" :name="item.name" :price="item.price" :description="item.description" :stock="item.stock" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<style scoped lang="scss">
@import url(./product);
</style>

