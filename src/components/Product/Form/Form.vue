<script setup>
import InputField from "../../Input/InputField.vue";
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
        {{ buttonText }}
      </v-btn>
      <v-btn color="light-green darken-4" dark type="submit" outlined small>
        <v-icon left>{{ buttonText }}</v-icon>
        {{saveDialog}}
      </v-btn>
    </v-card-actions>
  </v-form>
</template>
<style scoped>

</style>
