<script setup>
import Form from "../Form/Form.vue";
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
<template>
  <v-dialog
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      width="auto"
  >
    <v-card width="500">
      <v-card-title>
        <span class="headline">Posts</span>
      </v-card-title>
      <v-container>
        <Form/>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
