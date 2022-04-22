import axios from "axios";
const state = {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
    error: '',
  }
  const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state => state.user,
    getError: state => state.error
  }
  const actions = {
    async login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
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
  }
  const mutations = {
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  };