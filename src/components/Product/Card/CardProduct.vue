<script setup>
import ItemAction from "./ItemAction/ItemAction.vue";
import {ref} from "vue";

defineProps({
  name:String,
  description:String,
  price:Number,
  stock:Number
})
const emit = defineEmits(['editData','deleteData'])
const getItemEdit = () => {
  emit('editData')
}
const getItemDelete = () => {
  emit('deleteData')
}
</script>
<template>
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
                  <item-action title="Edit" icon="mdi-pencil" @item-event="getItemEdit"/>
                  <item-action title="Delete" icon="mdi-delete" @item-event="getItemDelete"/>
                </v-list>
              </v-menu>
            </v-col>
          </v-row>
          <v-card-text class="text-h5 font-weight-bold">
            {{ name }}
          </v-card-text>
          <v-card-subtitle>Desc: {{ description }}</v-card-subtitle>
          <v-card-subtitle>Price : {{ price }}</v-card-subtitle>
          <v-card-subtitle>Stock Product : {{ stock }}</v-card-subtitle>
        </v-card>
</template>
