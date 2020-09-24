import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = () =>
  new Vuex.Store({
  state: {
    imageArray: ['excavator', 'excavator3', 'excavator4', 'katok', 'excavator'],
    shownImageIndexPrimary: 0,
    shownImageIndexGeneral: 1,
    },
  mutations: {
    INCREMENT_IMAGE_INDEX (state) {
      state.shownImageIndexPrimary++
      state.shownImageIndexGeneral++
      if (state.shownImageIndexPrimary >= state.imageArray.length) {
        state.shownImageIndexPrimary = 0
      }
      if (state.shownImageIndexGeneral >= state.imageArray.length) {
        state.shownImageIndexGeneral = 0
      }
    },
    SET_IMAGE_INDEX (state, imageIndex) {
      state.shownImageIndexPrimary = imageIndex
      state.shownImageIndexGeneral = imageIndex + 1
      if (state.shownImageIndexGeneral >= state.imageArray.length) {
        state.shownImageIndexGeneral = 0
      }
    }
  },

  })
export default store
