<template>
  <div class="paging">
    <div class="paging__row">
      <div class="paging__container" v-for="count in arrayLength" :key="count" @click="selectImage(count-1)">
        <img src="/dots/page-dot.svg" alt="dot" class="paging__dot" :class="checkSelect(count-1)">
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
name: "paging",
  computed: {
  },
  computed: mapState({
    shownImageIndexPrimary: state => state.shownImageIndexPrimary,
    arrayLength (state) {
      return state.imageArray.length-1
    },
  }),
  methods: {
    ...mapMutations(['SET_IMAGE_INDEX']),
    selectImage(dotNumber) {
      this.SET_IMAGE_INDEX(dotNumber)
      //this.$emit('setActive', dotNumber)
    },
    checkSelect(dotNumber) {
      if (dotNumber === this.shownImageIndexPrimary) {
        return 'paging__dot--active'
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
  .paging {
    &__row {
      display: flex;
      justify-content: flex-start;
    }
    &__container {
      margin: 10px;
    }
    &__dot {
      padding: 5px;
      &--active {
        border: whitesmoke double 1px;
        border-radius: 50%;
      }
    }
  }
</style>
