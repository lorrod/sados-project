<template>
 <div class="container2">
    <shareInformation class="container2__info"/>
    <categories class="container2__categories"/>
 </div>
</template>

<script>
import shareInformation from './__share-information'
import categories from './__categories'
export default {
  name: "container2",
  components: {
    shareInformation,
    categories
  }
}
</script>

<style lang="scss">
  .container2 {
    height: 100vh;
    min-height: 650px;
    width: 100vw;
    padding: 30px;
    padding-left: $marginContent * 1.5;
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
      padding: 0 $marginContent * 1.5 0 0;
    }
  }
  @media (max-width: $smallScreen) {
    .container2 {
      padding-top: $marginContent * 1.5;
      padding: 20px;
      &__categories {
        //overflow-x: hidden;
      }
    }
  }
</style>
