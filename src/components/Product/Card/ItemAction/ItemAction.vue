<script setup>
const emit = defineEmits()
defineProps({
  icon:String,
  title:String
})
const getItem = () =>{
  emit('item-event')
}
</script>
<template>
  <v-list-item :prepend-icon="icon" :title="title" @click="getItem">
  </v-list-item>
</template>
