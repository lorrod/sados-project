<template>
  <div class="carousel-container" ref="carouselWindow">
    <div class="carousel-container__images">
      <div class="carousel-container__image"
      v-for="(name, key) in imageArray"
      :key="key">
        <imageDiv
          :image-name="name"
          :id="'image-'+name+'_'+classPriority"
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
    classPriority () {
      if (this.pagingRequire) {
        return 'primary'
      }
      return 'general'
    },
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
      this.showImage(newIndex)
      this.hideImage(oldIndex)
      this.returnBack(oldIndex)
    }
  },
  methods: {
    getCarouselWidth() {
      console.log(this.$refs.carouselWindow.clientWidth)
      return this.$refs.carouselWindow.clientWidth
    },
    showImage(imgNumber) {
      this.getCarouselWidth()
      if (this.pagingRequire) {
        //gsap.set("#image-"+this.$store.state.imageArray[imgNumber]+'_primary', {x: this.getCarouselWidth()})
        //gsap.to("#image-"+this.$store.state.imageArray[imgNumber]+'_primary',  {x: this.getCarouselWidth(), duration: 0})
        gsap.fromTo("#image-"+this.$store.state.imageArray[imgNumber]+'_primary', {x: this.getCarouselWidth(), opacity: 1,}, {x: -this.getCarouselWidth(), duration: 0.5, ease: "strong.inOut"})
      } else {
        //gsap.set("#image-"+this.$store.state.imageArray[imgNumber]+'_general', {x: this.getCarouselWidth()})
        //gsap.to("#image-"+this.$store.state.imageArray[imgNumber]+'_general',  {x: this.getCarouselWidth(), duration: 0})
        gsap.fromTo("#image-"+this.$store.state.imageArray[imgNumber]+'_general', {x: this.getCarouselWidth(), opacity: 1}, {x: -this.getCarouselWidth(), duration: 0.5, ease: "strong.inOut"})
      }
      console.log('gsaping to show '+ imgNumber.toString())
    },
    hideImage(imgNumber) {
      if (this.pagingRequire) {
        gsap.to("#image-"+this.$store.state.imageArray[imgNumber]+'_primary',  {x: -2*this.getCarouselWidth(), opacity: 0, duration: 0.5, delay: 0.1, ease: "strong.inOut"})
        //gsap.fromTo("#image-"+this.$store.state.imageArray[imgNumber]+'_primary', {x: -this.getCarouselWidth()}, {x: -2*this.getCarouselWidth(), duration: 0.5, ease: "none"})
      } else {
        gsap.to("#image-"+this.$store.state.imageArray[imgNumber]+'_general',  {x: -2*this.getCarouselWidth(), opacity: 0, duration: 0.5, delay: 0.1, ease: "strong.inOut"})
        //gsap.fromTo("#image-"+this.$store.state.imageArray[imgNumber]+'_general', {x: -this.getCarouselWidth()}, {x: -2*this.getCarouselWidth(), duration: 0.5, ease: "none"})
      }
    },
    returnBack(imgNumber) {
      console.log('returning back')
      if (this.pagingRequire) {
        gsap.to("#image-"+this.$store.state.imageArray[imgNumber]+'_primary',  {x: this.getCarouselWidth(), duration: 0, delay: 1, ease: "none"})
      } else {
        gsap.to("#image-"+this.$store.state.imageArray[imgNumber]+'_general',  {x: this.getCarouselWidth(), duration: 0, delay: 1, ease: "none"})
      }
    }
  },
  mounted() {
    this.showImage(this.currentImageIndex)
  }
}
</script>

<style lang="scss">
  .test {
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
