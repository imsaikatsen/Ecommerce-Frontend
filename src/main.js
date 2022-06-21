import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



import "./assets/css/style.css";


createApp(App).use(router).use.apply(VueAxios, axios).use(store).mount('#app')
