export default {
  SET_USERNAME: (state, username) => {
    state.username = username
    window.localStorage.setItem('username', username)
  },
  SET_TOKEN: (state, token) => {
    state.token = token
    window.localStorage.setItem('token', token)
  }
}
