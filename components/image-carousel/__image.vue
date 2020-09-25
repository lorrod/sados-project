<template>
  <div class="image-carousel">
    <img
      class="image-carousel__image"
      :class="[priorityWindow ? 'image-carousel__image--right': 'image-carousel__image--general', windowIsWider ? 'image-carousel__image--shorter': 'image-carousel__image--wider']"
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
    },
    imageShorter: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    windowIsWider() {
      return !this.imageShorter
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
      &--shorter {
        width: auto;
        height: 100%;
      }
      &--wider {
        width: 100vw;
        height: auto;
      }
      opacity:0.7;
      -moz-opacity:0.7;
      filter: alpha(opacity=70) black;
      -khtml-opacity: 0.7;
      background-color:#000;
    }
  }

</style>
