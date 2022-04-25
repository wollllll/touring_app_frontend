import { createStore } from 'vuex'
import { modal } from '@/store/modal'
import { spot } from '@/store/spot'

export const store = createStore({
  modules: {
    modal,
    spot,
  },
})
