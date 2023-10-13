<script setup>
import Form from "../Form/Form.vue";
import {ref, watch} from "vue";
import {useProductStore} from "../../../store/product.js";

const props = defineProps({
  value: String,
  editedText:String

})
const productStore = useProductStore()
const emit = defineEmits()
const inputValue = ref(props.value)
watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})
const savePost = async () => {
 emit('save-post')
}
const closeDialog = () => {
  emit('close-dialog')
}

</script>
<template>
  <v-dialog
      v-model="inputValue"
      width="auto"
  >
    <v-card width="500">
      <v-card-title>
        <span class="headline">{{ editedText }}</span>
      </v-card-title>
      <v-container>
        <Form @save-post="savePost" @close-dialog="closeDialog" :editedText="props.editedText"/>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
