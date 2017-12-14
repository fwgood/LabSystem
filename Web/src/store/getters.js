export default {
  getUsername(state) {
    return state.username || window.localStorage.getItem('username')
  },
  getToken(state) {
    return state.token || window.localStorage.getItem('token')
  }
}
