<template>
  <div class="to-top-button">
    <div class="to-top-button__circle" @click="toTop(className)">
      <div class="to-top-button__text">
        Наверх
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "to-top-button.vue",
  props: {
    className: {
      default: 'container',
      type: String,
    }
  },
  methods: {
    toTop(className) {
      window.scrollTo(0,10)
    }
  }

}
</script>

<style scoped lang="scss">
  .to-top-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    &__circle {
      display: flex;
      height: 80px;
      width: 80px;
      background-color: rgb(235,233,224);
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: #999999;
      }
    }
    &__text {
      margin: auto;
      font-weight: 600;
    }
  }
</style>
