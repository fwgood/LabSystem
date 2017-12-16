import utils from '../utils'
export default {
  login: ({ commit, state }, { username, password }) => {
    return new Promise((resolve, reject) => {
      utils
        .login(username, password)
        .then(res => {
          commit('SET_USERNAME', username)
          commit('SET_TOKEN', res.data.token)
          commit('SET_AVATAR', res.data.avatar)
          commit('SET_ROLE', res.data.jurisdiction)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  compile: ({ commit, state }, { language, filename, content, input }) => {
    return new Promise((resolve, reject) => {
      utils
        .compile(language, filename, content, input)
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  },
  getIndex() {
    return new Promise((resolve, reject) => {
      utils
        .getIndex()
        .then(res => {
          resolve(res)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}
