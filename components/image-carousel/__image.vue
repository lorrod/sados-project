<template>
  <div class="image-carousel">
    <img
      class="image-carousel__image"
      :class="[priorityWindow ? 'image-carousel__image--right': 'image-carousel__image--general']"
      :src="'/main-pictures/'+imageName+'.svg'" :alt="imageName">
  </div>
</template>

<script>
export default {
name: "container",
  props: {
    imageName: {
      type: String,
      default() {
        return 'excavator'
      }
    },
    priorityWindow: {
      // if receive true that means we are on the right image
      type: Boolean,
      default() {
        return false;
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .image-carousel {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: all ease .5s;
    &__image {
      &--right {
        height: 100%;
        width: auto;
      }
      &--general {
        min-width: 100vw / 5;
        min-height: 100vh;
        /*
        @media (min-width: 1600px) and (min-height: 1000px) {
          height: 100vh;
          min-width: 100vw / 5;
        }
        
         */
      }
      opacity:0.7;
      -moz-opacity:0.7;
      filter: alpha(opacity=70) black;
      -khtml-opacity: 0.7;
      background-color:#000;
    }
  }

  @media (max-width: $mediumScreen) {
  .image-carousel {
      &__image {
        &--right {
          height: 100%;
          width: auto;
        }

        &--general {
          height: 100%;
          width: auto;
        }
      }
  }
}
</style>
