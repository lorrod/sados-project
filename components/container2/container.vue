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
    height: 100%;
    min-height: 50rem;
    width: 100vw;
    //padding: 30px;
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
      padding: 0;
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
