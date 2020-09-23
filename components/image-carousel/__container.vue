<template>
  <div class="carousel-container">
    <div class="carousel-container__images">
      <div class="carousel-container__image"
      v-for="(name, key) in this.$store.state.imageArray"
      :key="key">
        <imageDiv
          :image-name="name"
          :style="{ 'margin-left': '-'+(100 * currentImageIndex)+'%' }"
        />
      </div>
      <paging
        v-if="pagingRequire"
        class="carousel-container__pages"
        :currentDot="this.$store.state.shownImageIndexPrimary"
        :count-pages="this.$store.state.imageArray.length" />
    </div>
  </div>
</template>

<script>
import imageDiv from "./__image"
import paging from "./__paging"

import { mapMutations } from 'vuex'
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
}
</script>

<style lang="scss">
  .carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    &__images {
      display: flex;
      margin: 0 auto;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    &__image {
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
