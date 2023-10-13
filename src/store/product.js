import {defineStore} from 'pinia'
import {fetchDataProduct} from "../service/api/product.js";

export const useProductStore = defineStore('product', {
    state: () => ({
        fruitData: [],
        editedIndex:0,
        fruits:{
            productId: null,
            productName: '',
            productDesc: '',
            productPrice: 0,
            productStock: 0
        },
        postFruit:{
            productId: null,
            productName: '',
            productDesc: '',
            productPrice: 0,
            productStock: 0
        }
    }),
    actions: {
        async getDataProduct() {
            try {
                const data = await fetchDataProduct()
                return this.fruitData = data
            } catch (error) {
                console.error(error);
            }
        }
    }
})

