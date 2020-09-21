<template>
 <div class="container3">
   <information class="container3__info" />
   <requestForm />
 </div>
</template>

<script>
import information from './__information'
import requestForm from './__request-call'
export default {
  name: "container3",
  components: {
    information,
    requestForm
  }
}
</script>

<style lang="scss">
  .container3 {
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding: $marginContent;
    padding-left: $marginContent * 1.5;
    &__info {
      // flex: 1 3 auto;
      margin-right: 40px;
    }
  }
   @media (max-width: $mediumScreen) {
   .container3 {
      flex-direction: column-reverse;
     align-items: flex-start;
     &__info {
       margin: $marginContent 0 0 0;
     }
   }
 }
  @media (max-width: $smallScreen) {
   .container3 {
    padding-left: $marginContent / 2;
    padding-top: $marginContent * 10;
     margin-top: $marginContent;
   }
  }
</style>
