<script setup>
import {ref, watch} from "vue";

const emit = defineEmits()

const dialogEvent = () =>{
  emit('dialog-event')
}
const props = defineProps({
  value: String,
})
const inputValue = ref(props.value)
watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<template>
  <v-toolbar color="#f2f2f2" elevation="0" height="70" class="mt-5">
    <h1 class="ml-7">All Product</h1>
    <v-spacer></v-spacer>
    <v-text-field
        label="Search.."
        color="blue"
        class="pt-5 mt-3 rounded"
        prepend-inner-icon="mdi-magnify"
        solo
        v-model="inputValue"
        rounded
        variant="outlined"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn dark prepend-icon="mdi-filter" class="mt-3" border color="blue"> Filter</v-btn>
    <v-btn dark prepend-icon="mdi-export-variant" class="mt-3 ml-5" border color="blue"> Export</v-btn>
    <v-btn dark prepend-icon="mdi-plus" class="mt-3 ml-4" border color="blue" @click="dialogEvent"
    > Add Product
    </v-btn>
  </v-toolbar>
</template>
