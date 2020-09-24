import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = () =>
  new Vuex.Store({
  state: {
    imageArray: ['excavator', 'excavator3', 'excavator4', 'katok'],
    shownImageIndex: 0,
    },
  mutations: {
    INCREMENT_IMAGE_INDEX (state) {
      state.shownImageIndex++
      if (state.shownImageIndex >= state.imageArray.length) {
        state.shownImageIndex = 0
      }
    },
    SET_IMAGE_INDEX (state, imageIndex) {
      state.shownImageIndex = imageIndex
    }
  },

  })
export default store
