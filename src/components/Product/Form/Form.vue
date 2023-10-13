<script setup>
import InputField from "../../Input/InputField.vue";
import {ref} from "vue";
import {useProductStore} from "../../../store/product.js";

const productStore = useProductStore()
const postFruit = productStore.postFruit
const emit = defineEmits(['save-post','close-dialog'])
const props = defineProps(['editedText'])
const savePost = () => emit('save-post',postFruit)
const closeDialog = () => emit('close-dialog')
</script>
<template>
  <v-form @submit.prevent="savePost">
    <v-row>
      <v-col cols="6">
        <InputField v-model="postFruit.productName" label="Product Name"/>
      </v-col>
      <v-col cols="6">
        <InputField v-model="postFruit.productDesc" label="Product Desc"/>
      </v-col>
      <v-col cols="6">
        <InputField v-model="postFruit.productPrice" label="Product Price"/>
      </v-col>
      <v-col cols="6">
        <InputField v-model="postFruit.productStock" label="Product Stock"/>
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
        <v-icon left>mdi-file</v-icon>
        {{ editedText }}
      </v-btn>
    </v-card-actions>
  </v-form>
</template>
<style scoped>

</style>
