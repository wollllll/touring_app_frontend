import { store } from '@/store'
import { computed } from 'vue'

export const storeService = {
  getters: {
    /**
     * モーダル表示判定を取得
     *
     * @returns {any}
     */
    isShowModal() {
      return computed(() => store.getters['modal/isShowModal'])
    },
  },
  commit: {
    /**
     * モーダル表示判定を保存
     *
     * @param bool
     */
    setIsShowModal(bool) {
      store.commit('modal/setIsShowModal', bool)
    },
  },
}
