export const modal = {
  namespaced: true,
  state: {
    isShowModal: false,
  },
  getters: {
    isShowModal: (state) => state.isShowModal,
  },
  mutations: {
    setIsShowModal(state, bool) {
      state.isShowModal = bool
    },
  },
}
