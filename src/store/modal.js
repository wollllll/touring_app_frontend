export const modal = {
  namespaced: true,
  state: {
    isShowSpotModal: false,
    isShowSearchModal: false,
  },
  getters: {
    isShowSpotModal: (state) => state.isShowSpotModal,
    isShowSearchModal: (state) => state.isShowSearchModal,
  },
  mutations: {
    setIsShowSpotModal(state, bool) {
      state.isShowSpotModal = bool
    },
    setIsShowSearchModal(state, bool) {
      state.isShowSearchModal = bool
    },
  },
}
