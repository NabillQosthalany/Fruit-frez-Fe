import {defineStore} from 'pinia'
import axios from "axios";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userData: null
    }),
    actions: {
        async fetchDataUser(){
          try {
              const token = localStorage.getItem('token')
              const response = await axios.get('http://localhost:4000/auth/user',{
                  headers:{
                      Authorization:`Bearer ${token}`
                  }
              })
              const userData = response.data
              this.setUserData(userData)
          }  catch (err){
              console.log(err)
          }
        },
        setUserData(userData) {
            this.userData = userData
        },
        logOut(){
            this.userData = null
        }
    }
})
