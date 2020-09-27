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
    //align-items: center;
    height: 100vh;
    width: 100vw;
    padding: 0 $marginContent 0 $marginContent 0;
    //padding-left: $marginContent * 1.5;
    &__info {
      // flex: 1 3 auto;
      margin-right: 40px;
    }
  }
   @media (max-width: $mediumScreen) {
   .container3 {
      flex-direction: column-reverse;
     justify-content: space-around;
     align-items: center;
    padding: 70px 0;
    //padding-left: 0;
     &__info {
       margin: $marginContent 0 0 0;
     }
   }
 }
  @media (max-width: $smallScreen) {
   .container3 {
      &__info {
        margin: 20px 0 0 0;
      }
   }
  }
</style>
