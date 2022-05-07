export const modal = {
  namespaced: true,
  state: {
    isCreateSpotModal: false,
    isShowSpotModal: false,
    isShowSearchModal: false,
    isAuthRegisterModal: false,
  },
  getters: {
    isCreateSpotModal: (state) => state.isCreateSpotModal,
    isShowSpotModal: (state) => state.isShowSpotModal,
    isShowSearchModal: (state) => state.isShowSearchModal,
    isAuthRegisterModal: (state) => state.isAuthRegisterModal,
  },
  mutations: {
    setIsCreateSpotModal(state, bool) {
      state.isCreateSpotModal = bool
    },
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
