import * as types from '../mutation-types'

const state = {
  domain: 'http://test.example.com', // 保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
  login: false,
  userInfo: { // 保存用户信息
    nick: null,
    ulevel: null,
    uid: null,
    portrait: null
  }
}

const mutations = {
  [types.DOLOGIN] (state, userInfo) {
    state.login = true;
    state.userInfo = userInfo
  },
  [types.UPDATEUSER] (state, newUser) {
    state.login = false;
    state.userInfo = newUser
  }
}

export default {
  state,
  mutations
}
