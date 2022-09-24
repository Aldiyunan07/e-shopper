import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

axios.interceptors.request.use((config)=>{ // Konfigurasi global axios
    config.baseURL = 'http://localhost:8000/'
    config.withCredentials = true
    return config
})
store.dispatch('auth/me').then(()=>{
    createApp(App).use(store).use(router).mount('#app')
})