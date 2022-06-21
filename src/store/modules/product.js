import axios from "axios";
const state = {
  products: []
}
const getters = {
  products: state => state.products,

}
const actions = {
  fetchProducts({ commit }) {
    axios.get(`http://127.0.0.1:8000/api/auth/products/product-list`).then(
      res => {
        commit("SET_PRODUCT", res.data); 
      }
    );
  }
}

  const mutations = {
    SET_PRODUCT: (state, products) => (state.products = products),

  }
    
  
  
  export default {
    state,
    getters,
    actions,
    mutations
  };