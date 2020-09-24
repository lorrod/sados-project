<template>
  <div class="image-carousel">
    <img class="image-carousel__image" :src="'/main-pictures/'+imageName+'.svg'" :alt="imageName">
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
      height: 100%;
      width: auto;
      opacity:0.7;
      -moz-opacity:0.7;
      filter: alpha(opacity=70) black;
      -khtml-opacity: 0.7;
      background-color:#000;
    }
  }
</style>
