<template>
  <div class="right-window">
    <div class="right-window__image-container">
      <imgCarousel :currentImageIndex="shownImageIndexPrimary" :pagingRequire="true"/>
    </div>
    <div class="right-window__information">
      <div class="right-window__text">
        <p class="right-window__warning">18 +</p>
        <p class="right-window__explanation">Видов техники</p>
      </div>
      <hr>
      <div class="right-window__button">
        <img class="right-window__button--img" src="/dots/nine-dots.svg" alt="dots">
        <a class="right-window__button--href" href="#">Все виды техники</a>
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
  computed: mapState({
    shownImageIndexPrimary: state => state.shownImageIndexPrimary,
  }),
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
    }
    &__image {
      height: 100%;
      width: auto;
    }
    &__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      // margin-top: 30px;
      &--img {
        //margin: auto;
        //width: 24px;
        //height: 24px;
      }
      &--href {
        font-size: 14px;
        font-weight: bold;
        margin-left: 30px;
        text-decoration: none;
        color: rgb(30,30,30);
      }
    }
    &__information {
      padding: 25px;
      height: 33%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__warning {
      font-size: 80px;
      white-space: nowrap;
    }
    &__explanation {
      //white-space: nowrap;
    }
    &__text {
      font-size: 25px;
      // margin-bottom: 30px;
      font-weight: 600;
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
        margin: auto;
        padding: 10px;
        height: 70%;
      }
    }
  }
</style>
