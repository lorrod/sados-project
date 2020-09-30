<template>
 <div class="container2" ref="container2">
    <shareInformation class="container2__info"/>
    <categories
      class="container2__categories"
      :mobileWidth="this.isMobile"
    />
 </div>
</template>

<script>
import shareInformation from './__share-information'
import categories from './__categories'
export default {
  name: "container2",
  data() {
    return {
      isMobile: false
    }
  },
  components: {
    shareInformation,
    categories
  },
  methods: {
    handleResizeContainer(event) {
      if (this.$refs.container2) {
        if (this.$refs.container2.clientWidth > 619 ) {
          console.log('>>>>>>')
          this.isMobile = false
        } else {
          console.log('<<<<<<')
          this.isMobile = true
        }
      }
    },
  },
  mounted() {
  if (this.$refs.container2.clientWidth > 619 ) {
    this.isMobile = false
  } else {
    this.isMobile = true
  }
  window.addEventListener('resize', this.handleResizeContainer)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResizeContainer)
  },
}
</script>

<style lang="scss">
  .container2 {
    // height: 100%;
    min-height: 50rem;
    width: 100vw;
    display: flex;
    &__info {
      flex: 1 2 auto;
    }
    &__categories {
      align-content: center;
    }
  }
  @media (max-width: 1010px) {
    .container2 {
      height: auto;
      display: flex;
      flex-direction: column;
      padding: 0 0 0 $menuWidth;
    }
  }
  @media (max-width: $smallScreen) {
    .container2 {
      padding: 15px;
      //padding-top: $marginContent * 1.5;
      &__info {
        flex: 1 1 auto;

      }
    }
  }
</style>
