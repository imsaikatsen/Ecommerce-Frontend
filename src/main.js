import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



import "./assets/css/style.css";

// http://127.0.0.1:8000/api/auth/login
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/auth/login'
const token = localStorage.getItem('token')
if(token){
    axios.defaults.headers.common['Authorization'] = token
}
createApp(App).use(router).use.apply(VueAxios, axios).use(store).mount('#app')
