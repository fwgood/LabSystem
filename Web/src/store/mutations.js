export default {
  SET_USERNAME: (state, username) => {
    state.username = username
    window.localStorage.setItem('username', username)
  },
  SET_TOKEN: (state, token) => {
    state.token = token
    window.localStorage.setItem('token', token)
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
    window.localStorage.setItem('avatar', avatar)
  },
  SET_ROLE: (state, role) => {
    state.role = role
    window.localStorage.setItem('role', role)
  }
}
