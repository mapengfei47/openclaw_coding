import { defineStore } from 'pinia'

interface UserState {
  token: string
  userInfo: {
    id?: number
    name?: string
    avatar?: string
  }
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
    userInfo: {}
  }),

  getters: {
    isLogin: (state) => !!state.token
  },

  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },

    setUserInfo(info: UserState['userInfo']) {
      this.userInfo = info
    },

    logout() {
      this.token = ''
      this.userInfo = {}
      localStorage.removeItem('token')
    }
  }
})
