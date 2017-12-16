export default {
  getUsername(state) {
    return state.username || window.localStorage.getItem('username')
  },
  getToken(state) {
    return state.token || window.localStorage.getItem('token')
  },
  getRole(state) {
    return state.role || window.localStorage.getItem('role')
  },
  getAvatar(state) {
    return state.avatar || window.localStorage.getItem('avatar')
  }
}
