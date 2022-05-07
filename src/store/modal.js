export const modal = {
  namespaced: true,
  state: {
    isShowSpotModal: false,
    isShowSearchModal: false,
    isAuthRegisterModal: false,
  },
  getters: {
    isShowSpotModal: (state) => state.isShowSpotModal,
    isShowSearchModal: (state) => state.isShowSearchModal,
    isAuthRegisterModal: (state) => state.isAuthRegisterModal,
  },
  mutations: {
    setIsShowSpotModal(state, bool) {
      state.isShowSpotModal = bool
    },
    setIsShowSearchModal(state, bool) {
      state.isShowSearchModal = bool
    },
    setIsAuthRegisterModal(state, bool) {
      state.isAuthRegisterModal = bool
    },
  },
}
