<template>
  <div class="carousel-container">
    <div class="carousel-container__images">
      <div class="carousel-container__image"
      v-for="(name, key) in imageArray"
      :key="key">
        <imageDiv
          :image-name="name"
          :id="'image-'+name"
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
import { gsap } from "gsap"
import { mapState } from 'vuex'

export default {
name: "container",
  components: {
    imageDiv,
    paging,
  },
  data() {
    return {
      timeline: null,
    }
  },
  computed: mapState({
    shownImageIndexPrimary: state => state.shownImageIndexPrimary,
    arrayLength (state) {
      return state.imageArray.length
    },
    imageArray: state => state.imageArray,
  }),
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
    }
  },
  watch: {
    currentImageIndex: function (newIndex, oldIndex) {
      this.hideImage(oldIndex)
      this.showImage(newIndex)
    }
  },
  methods: {
    showImage(imgNumber) {
      //timeline.to("#image-"+this.$store.state.imageArray[imgNumber], 2, { x: '-100%' })
      // таким образом пытаюсь gsap
      gsap.fromTo("#image-"+this.$store.state.imageArray[imgNumber], {x: '100%'}, {x: '-100%'})
    },
    hideImage(imgNumber) {
      //timeline.to("#image-"+this.$store.state.imageArray[imgNumber], 2, { x: '+200%' })
      // таким образом пытаюсь gsap
      gsap.fromTo("#image-"+this.$store.state.imageArray[imgNumber], {x: '-100%'}, {x: '+100%'})

    },
  },
  mounted() {
    //this.timeline = new TimelineLite()
    this.showImage(this.currentImageIndex)
  }
}
</script>

<style lang="scss">
  .checkingButton {
    position: fixed;
    bottom: 40px;
    left: 40px;
  }
  .carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    &__images {
      /*
      display: flex;
      margin: 0 auto;
       */
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    &__image {
      position:absolute;
      right:-100%;
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
</style>
