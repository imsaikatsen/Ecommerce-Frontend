import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



import "./assets/css/style.css";



// axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:8000/api/auth'
// axios.defaults.headers.post['Accept'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch('logout')
            return router.push('/login')
        }
        else {
            store.commit('handle_error', JSON.parse(error.response.data.error));
        }
    }
})


createApp(App).use(router).use.apply(VueAxios, axios).use(store).mount('#app')
