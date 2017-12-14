import axios from 'axios'
import store from '../store'
import router from '../router'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://sw.helianthus.cc/ETMS/servlet'
axios.interceptors.request.use(
  config => {
    if (store.getters.getAccount) {
      if (store.getters.getAccount.token) {
        config.headers.Authorization = store.getters.getAccount.token
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          router.replace({
            path: '/login'
          })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)
export default {
  login(username, password) {
    return axios.get(`/SignIn?action=SignIn`, {
      auth: {
        username: username,
        password: password
      }
    })
  }
}
