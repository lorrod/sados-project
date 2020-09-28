<template>
  <div class="right-window">
    <div class="right-window__image-container" ref="imageSmallContainer">
      <imgCarousel :currentImageIndex="shownImageIndexPrimary" :pagingRequire="true" :windowWider="widthIsMore"/>
    </div>
    <div class="right-window__information">
      <div class="right-window__text" @click="scrollNextSection()">
        <p class="right-window__warning">18 +</p>
        <p class="right-window__explanation">Видов техники</p>
      </div>
      <hr>
      <div class="right-window__button" @click="scrollNextSection()">
        <img class="right-window__button--img" src="/dots/nine-dots.svg" alt="dots">
        <p class="right-window__button--href">Все виды техники</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgCarousel from '../image-carousel/__container'
import {mapState} from "vuex";
export default {
name: "rightWindow",
  components: {
    imgCarousel,
  },
  data() {
    return {
      widthIsMore: true,// image is 1200px*750px  if window is wider than image => true
    }
  },
  computed: mapState({
    shownImageIndexPrimary: state => state.shownImageIndex,
  }),
  methods: {
    scrollNextSection() {
      window.scrollTo(0,window.innerHeight);
      //document.querySelector("."+section).scrollIntoView({block: "start", behavior:"smooth"});
    },
    handleResizeImgContainer(event) {
      if (this.$refs.imageSmallContainer) {
        if ((this.$refs.imageSmallContainer.clientWidth / this.$refs.imageSmallContainer.clientHeight) < 1.6 ) {
          this.widthIsMore = false
          //console.log('setting false')
        } else {
          this.widthIsMore = true
        }
      }
    },
  },
  mounted() {
    if ((this.$refs.imageSmallContainer.clientWidth / this.$refs.imageSmallContainer.clientHeight) < 1.6 ) {
      this.widthIsMore = false
    }
    window.addEventListener('resize', this.handleResizeImgContainer)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResizeImgContainer)
  },
}
</script>

<style lang="scss">
  .right-window {
    width: 25%;
    height: 100%;
    overflow: hidden;
    &__image-container {
      height: 66%;
      overflow: hidden;
      background: rgb(50,45,36);
      background: linear-gradient(90deg, rgba(50,45,36,1) 0%, rgba(76,67,55,1) 100%);
    }
    &__image {
      height: 100%;
      width: auto;
    }
    &__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      // margin-top: 30px;
      &--img {
        //margin: auto;
        //width: 24px;
        //height: 24px;
      }
      &--href {
        font-size: 15px;
        font-weight: 500;
        margin-left: 30px;
        text-decoration: none;
        color: rgb(30,30,30);
      }
    }
    &__information {
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: auto;
      height: 30%;
      min-height: 200px;
    }
    &__text {
    }
    &__warning {
      font-size: 78px;
      white-space: nowrap;
      font-weight: 600;
      font-style: normal;
    }
    &__explanation {
      //white-space: nowrap;
      font-weight: 500;
      font-style: normal;
      font-size: 25px;
    }
    &__text {

      // margin-bottom: 30px;
      // font-weight: 500;
      // font-family: "Graphik LCG";
    }
  }


  @media (max-width: $mediumScreen) {
    .right-window {
      display: flex;
      width: 100%;
      height: 50%;
      &__image-container {
        width: 60%;
        height: auto;
        overflow: hidden;
      }
      &__image {
        width: 100%;
        min-width: 290px;
        height: auto;
      }
      &__information {
        padding: 10px;
        height: 70%;
        min-height: 180px;
      }
      &__text {
      font-size: 20px;
      }
      &__warning {
        font-size: 70px;
      }
    }
  }
</style>
