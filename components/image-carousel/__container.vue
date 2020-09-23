<template>
  <div class="carousel-container">
    <div class="carousel-container__images">
      <div class="carousel-container__image"
      v-for="(name, key) in this.$store.state.imageArray"
      :key="key">
        <imageDiv
          :image-name="name"
          :id="'image-'+name"
        />
      </div>
      <paging
        v-if="pagingRequire"
        class="carousel-container__pages"
        :currentDot="this.$store.state.shownImageIndexPrimary"
        :count-pages="this.$store.state.imageArray.length" />
    </div>
    <button @click="checking" class="checkingButton">Check button</button>
  </div>
</template>

<script>
import imageDiv from "./__image"
import paging from "./__paging"
import { TimelineLite } from 'gsap'
export default {
name: "container",
  components: {
    imageDiv,
    paging,
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
      const timeline = new TimelineLite()
      console.log('animate plz')
      timeline.to("#image-"+this.$store.state.imageArray[imgNumber], .1, { x: '-100%' })
    },
    hideImage(imgNumber) {
      const timeline = new TimelineLite()
      console.log('animate plz')
      timeline.to("#image-"+this.$store.state.imageArray[imgNumber], .1, { x: '-200%' })
    },
    checking() {
      console.log('animate plz 1')
      this.showImage(0)
    }
  },
  created() {
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
