<script setup>
import {ref, watch} from "vue";

const props = defineProps({
  value: String,
  label: String
})
const emit = defineEmits()
const inputValue = ref(props.value)
watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>
<template>
  <v-text-field variant="outlined" color="blue" v-model="inputValue" :label="label"/>
</template>
<style scoped>

</style>
