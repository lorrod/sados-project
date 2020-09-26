<template>
  <div class="general-window" ref="imageContainer">
    <imgCarousel class="general-window__background-image"
                 :pagingRequire="false"
                 :currentImageIndex="this.shownImage"
                 :windowWider="widthIsMore"
                 />
    <div class="general-window__slogan">
      Сдаём в аренду спецтехнику
    </div>
    <div class="general-window__mouse" @click="scrollNextSection()">
      <img class="general-window__mouse-img" src="/mouse/mouse.svg" alt="mouse">
    </div>
  </div>
</template>

<script>
import imgCarousel from '../image-carousel/__container'
import {mapState} from "vuex";
export default {
  name: "generalWindow",
  components: {
    imgCarousel,
  },
  data() {
    return {
      widthIsMore: true,// image is 1200px*750px  if window is wider than image => true
    }
  },
  computed: mapState({
    shownImage: state => state.shownImageIndex,
  }),
  methods: {
    scrollNextSection() {
      window.scrollTo(0,window.innerHeight);
      //document.querySelector("."+section).scrollIntoView({block: "start", behavior:"smooth"});
    },
    handleResizeImgContainer(event) {
      if (this.$refs.imageContainer) {
        if ((this.$refs.imageContainer.clientWidth / this.$refs.imageContainer.clientHeight) < 1.6 ) {
          this.widthIsMore = false
          //console.log('setting false')
        } else {
          this.widthIsMore = true
        }
      }
    },
  },
  mounted() {
    if ((this.$refs.imageContainer.clientWidth / this.$refs.imageContainer.clientHeight) < 1.6 ) {
      this.widthIsMore = false
      console.log(this.$refs.imageContainer.clientWidth)
      console.log(this.$refs.imageContainer.clientHeight)
      console.log(this.$refs.imageContainer.clientWidth / this.$refs.imageContainer.clientHeight)
    }
    window.addEventListener('resize', this.handleResizeImgContainer)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResizeImgContainer)
  },
}
</script>

<style lang="scss">
  .general-window {
    width: 100%;
    height: 100%;
    background: rgb(50,45,36);
    background: linear-gradient(90deg, rgba(50,45,36,1) 0%, rgba(76,67,55,1) 100%);
    //background-image: url(/main-pictures/excavator.svg);
    //background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    z-index:-55;
    &__background-image{
      overflow: hidden;
      position:absolute;
      width:100%;
      height:100%;
      top:0;
      z-index:-50;
    }
    &__slogan {
      color: white;
      margin-left: $marginContent;
      margin-top: $marginContent * 1.2;
      margin-right: $marginContent;
      font-size: 70px;
      font-weight: 400;
      max-width: $marginContent * 8;
      z-index:-40;
    }
    &__mouse {
      width: 100%;
      display: flex;
      margin-bottom: $marginContent / 2;
      z-index: 0;
      &-img {
        // width: 24px;
        // height: 24px;
        margin: 0 auto 0 auto;
      }
    }
  }

@media (max-width: $mediumScreen) {
  .general-window {
      &__slogan {
        margin-left: $marginContent / 2;
        font-size: 45px;
      }
      &__mouse {
        display: none;
      }
  }
}
/*
  <imgCarousel :image-data="['excavator','excavator2', 'loader-machine']" :pagingRequire="true"/>
import imgCarousel from '../image-carousel/__container'
imgCarousel,
*/
</style>
