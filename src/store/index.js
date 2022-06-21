import { createStore } from 'vuex'

import login from "./modules/login";
import product from "./modules/product";


const store = createStore({
  modules: {
    login,
    product,
  }
});

export default store;