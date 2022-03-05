import { loginReq, logoutReq, getInfoReq } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'
import defaultSettings from '@/settings'
//token: getToken(),
const state = {
  username: ''
}

const mutations = {
  M_username: (state, username) => {
    state.username = username
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
