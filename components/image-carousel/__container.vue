<template>
  <div class="carousel-container"
       ref="carouselWindow"
       :class="[pagingRequire ? 'carousel-container--primary': '']"
  >
    <div class="carousel-container__images">
      <div class="carousel-container__image"
      v-for="(name, key) in imageArray"
      :key="key">
        <imageDiv
          :imageShorter="windowWider"
          :priorityWindow="pagingRequire"
          :image-name="name"
          :style="{ 'margin-left': '-'+(100 * currentImageIndex)+'%' }"
        />
      </div>
      <paging
        v-if="pagingRequire"
        class="carousel-container__pages"
        :currentDot="shownImageIndexPrimary"
        :count-pages="arrayLength" />
    </div>
  </div>
</template>

<script>
import imageDiv from "./__image"
import paging from "./__paging"
import { gsap } from 'gsap'
import { mapState } from 'vuex'

let tl = gsap.timeline()
export default {
name: "container",
  components: {
    imageDiv,
    paging,
  },
  data() {
    return {
      timeline: tl,
      widthIsMore: true,// image is 1200px*720px  if window is wider than image => true
    }
  },
  computed: {
    ...mapState({
    shownImageIndexPrimary: state => state.shownImageIndex,
    arrayLength: state => state.imageArray.length,

    imageArray(state) {
      //return state.imageArray
      if (this.pagingRequire) {
        return state.imageArray
      } else {
        var arrayForGeneral =  state.imageArray.slice()
        arrayForGeneral.unshift(arrayForGeneral.pop())
        return arrayForGeneral
      }
    }
    }),
  },
  props: {
    pagingRequire: {
      type: Boolean,
      default() {
        return false
      }
    },
    currentImageIndex: {
      type: Number,
      default() {
        return 0
      }
    },
    windowWider: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
}
</script>

<style lang="scss">
  .carousel-container {
    &--primary {
      width: 100%;
      height: 100%;
      position: relative;
    }
    &__images {
      display: flex;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    &__image {
      //position:absolute;
      //right: -100%;
      width: 100%;
      height: 100%;
    }
    &__pages {
      position: absolute;
      bottom: 10px;
      width: 100%;
    }
    &__buttons {
      position: fixed;
      bottom: 20px;
      left: 300px;
      margin: 100 0 300 300;
      //text-align: center;
    }
  }

  @media (max-width: $mediumScreen) {
    .carousel-container {
      &__pages {
        top: 10px;
      }
    }
  }
</style>
