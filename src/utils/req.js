import Axios from 'axios'
import message from 'ant-design-vue/lib/message'
import 'ant-design-vue/lib/message/style/index.less'
import Cookies from 'js-cookie'

// 登陆
const login = () => {
  // Nginx自动拼接域名
  const loginUrl = '/api/login/cas_login?redirect_url='
  const { href } = window.location
  window.location.href = loginUrl + decodeURI(href)
}
// 请求错误提示
const hint = err => {
  if (err.status === 'login_error') {
    localStorage.clear()
    login()
  } else if (err.status === 'permission error') {
    message.error(err.msg)
  } else {
    message.error(`接口${err.config?.url}，错误${err?.status}，请与系统管理员联系。`, 5)
  }
}
function axiosHeaders() {
  Axios.defaults.headers.common['Efunds-Authentication-UserName'] = Cookies.get('userCode')
  Axios.defaults.headers.common['Efunds-Authentication-Token'] = Cookies.get('token')
}
const request = Axios.create({
  // baseURL: window.location.origin,
  baseURL: '',
  // timeout: 60000,
})
request.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
const combineUrl = config =>
  `${config.url}&${config.method}&${JSON.stringify(config.params)}&${JSON.stringify(config.data)}`
// const { CancelToken } = Axios
const sources = [] // 定义数组用于存储每个ajax请求的取消函数及对应标识
// 请求防抖，当一个url地址被请求多次，就会取消前一次请求
const removeSource = config => {
  for (const source in sources) {
    // 当多次请求相同时，取消之前的请求
    if (sources[source].umet === combineUrl(config)) {
      sources[source].cancel('取消请求')
      sources.splice(source, 1)
    }
  }
}

// 请求拦截器
request.interceptors.request.use(
  // TODO: 增加token校验
  config => {
    config.headers.common['Efunds-Authentication-UserName'] = localStorage.getItem('userCode')
    config.headers.common['Efunds-Authentication-Token'] = localStorage.getItem('token')
    config.headers.common['Efunds-Authentication-Version'] = localStorage.getItem('version')
    config.headers.common['Efunds-Authentication-ClientId'] = localStorage.getItem('clientId')
    // config.headers.common['Efunds-Authentication-Date'] = localStorage.getItem('loginDate');
    config.headers.common['User-Info'] = JSON.stringify({
      userId: localStorage.getItem('userCode'),
      userName: localStorage.getItem('userCode'),
    })
    return config
    // removeSource(config)
    // config.cancelToken = new CancelToken(c => {
    //   sources.push({
    //     umet: combineUrl(config),
    //     cancel: c,
    //   })
    // })
    // return config
  },
  error => Promise.reject(error),
)

// 响应拦截器
request.interceptors.response.use(
  config => {
    removeSource(config.config)
    return config.data
  },
  error => {
    if (!error.response) return null
    return Promise.reject(error.response)
  },
)

// get请求
function get(url, params) {
  return new Promise((resolve, reject) => {
    request
      .get(url, params)
      .then(res => {
        // 取消重复请求
        if (res === null) return
        if (res.status === 'login_error' || res.status === 'permission error') {
          hint(res)
        } else {
          if (res.status !== 'ok') message.error(res.msg, 5)
          resolve(res)
        }
      })
      .catch(err => {
        hint(err)
        reject(err)
      })
  })
}

// post请求
function post(url, params) {
  return new Promise((resolve, reject) => {
    request
      .post(url, params)
      .then(res => {
        // 取消重复请求
        if (res === null) return
        if (res.status === 'login_error' || res.status === 'permission error') {
          hint(res)
        } else {
          if (res.status !== 'ok') message.error(res.msg, 5)
          resolve(res)
        }
      })
      .catch(err => {
        hint(err)
        reject(err)
      })
  })
}

export { post, get, request, axiosHeaders }
