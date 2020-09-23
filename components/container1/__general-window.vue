<template>
  <div class="general-window">
    <imgCarousel class="general-window__background-image"
                 :pagingRequire="false"
                 :currentImageIndex="shownImageIndexGeneral"
                 />
    <div class="general-window__slogan">
      Сдаём в аренду спецтехнику
    </div>
    <div class="general-window__mouse" @click="scrollNextSection('container2')">
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
  computed: mapState({
    shownImageIndexGeneral: state => state.shownImageIndexGeneral,
  }),
  methods: {
    scrollNextSection(section) {
      document.querySelector("."+section).scrollIntoView({block: "start", behavior:"smooth"});
    }
  }
}
</script>

<style lang="scss">
  .general-window {
    width: 100%;
    height: 100%;
    //background: rgb(50,45,36);
    //background: linear-gradient(90deg, rgba(50,45,36,1) 0%, rgba(76,67,55,1) 100%);
    //background-image: url(/main-pictures/excavator.svg);
    //background-size: cover;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
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
      font-weight: bold;
      max-width: $marginContent * 8;
    }
    &__mouse {
      width: 100%;
      display: flex;
      margin-bottom: $marginContent / 2;
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
