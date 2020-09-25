<template>
  <div class="paging">
    <div class="paging__row">
      <div class="paging__container" v-for="count in arrayLength" :key="count" @click="selectImage(count-1)">
        <!--<img src="/dots/page-dot.svg" alt="dot" class="paging__dot" :class="checkSelect(count-1)">-->
        <svg width="25" height="25" viewBox="-16 -16 32 32" class="paging__svg">
          <circle class="paging__dot__circle" r="7" cx="0" cy="0" />
          <circle class="paging__dot__border" :class="checkSelect(count-1)" r="14" cx="0" cy="0" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
name: "paging",
  data() {
    return {
      timerId: null,
    }
  },
  computed: {
    ...mapState({
    shownImageIndexPrimary: state => state.shownImageIndex,
    arrayLength (state) {
      return state.imageArray.length
      },
    }),
  },
  methods: {
    ...mapMutations(['SET_IMAGE_INDEX', 'INCREMENT_IMAGE_INDEX']),
    selectImage(dotNumber) {
      window.clearInterval(this.timerId)
      this.SET_IMAGE_INDEX(dotNumber)
      this.startTimer()
    },
    checkSelect(dotNumber) {
      if (dotNumber === this.shownImageIndexPrimary) {
        return 'paging__dot__border--active'
      }
      return ''
    },
    startTimer() {
      this.timerId = setInterval(() => {
        this.INCREMENT_IMAGE_INDEX()
      }, 5000);
    }
  },
  mounted() {
    this.startTimer()
    }
}
</script>

<style scoped lang="scss">

    @keyframes slice{
        to{stroke-dasharray:100.53 100;}
    }

  .paging {
    z-index: 30000;
    &__row {
      display: flex;
      justify-content: flex-start;
    }
    &__container {
      margin: 10px;
    }
    &__svg {
      transform: rotate(-90deg);
      z-index: 500;
    }
    &__dot {
      padding: 15px;
      &__circle{
          fill:#fff;
          stroke-dasharray:100.53 100;
      }
      &__border {
          fill:none;
          stroke:none;
          stroke-width:2;
          &--active {
            stroke:#fff;
            stroke-dasharray:0 100;
            animation: 5s linear slice ;
            animation-fill-mode:forwards
          //border: whitesmoke double 1px;
          //border-radius: 50%;
        }
      }
    }
  }
  @media (max-width: $smallScreen) {
    .paging {
      &__container {
        margin: 2px;
      }
    }
  }
</style>
