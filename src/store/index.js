import { createStore } from 'vuex'
import axios from "axios";


const store = createStore({

  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    error: '',
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user,
    getError: state => state.error
  },
  actions: {
    async login({commit}, user) {
      // const rawResponse = fetch('http://localhost:8000/api/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({'email': 'sensaikat@gmail.com', 'password': '123456'}) 
      // });
      // const content = rawResponse.json();

      // console.log(content);


      return new Promise((resolve, reject) => {
        commit('auth_request')
        // const headers = {
        //   'Content' : 'application/json',
        //   'Accept' : 'application/json',
        // }
        // axios.post('login', {email: user.email, password: user.password })
        axios({
          url: 'login', data: {email: user.email, password: user.password }, method: 'POST'
        })
          .then(resp => {
            console.log(resp)
            const token = 'Bearer ' + resp.data.access_token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            commit('set_user', user)
            commit('handle_error', '')
            resolve(resp)
          })
          .catch(err => {
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    getUser({ commit }) {
      return new Promise((resolve, reject) => {
        axios({ url: 'user', method: 'GET' }).then(res => {
          commit('set_user', res.data)
          resolve(res)
          console.log(reject)
        })
      });
    }
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    set_user(state, user) {
      state.user = user
    },
    handle_error(state, error) {
      state.error = error
    },
  }
});

export default store;