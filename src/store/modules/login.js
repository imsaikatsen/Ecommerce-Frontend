const state = {
  user: null,
  token: null,
  }
  const getters = {
    isLoggedIn(state) {
      return !!state.token;
    },
    
  }
  const actions = {
    
    }
    
  const mutations = {
    
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },

}

export default {
    state,
    getters,
    actions,
    mutations
  };