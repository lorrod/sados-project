<template>
  <div class="category">
    <div class="category__image-container">
      <img class="category__image" :src="'/categories/'+catName+'.svg'" :alt="catName">
    </div>
    <div class="category__button">
      <p>{{ catName }}</p>
      <!--<img class="category__button--img" alt="show" src="/next-button/next-button-black.svg">-->
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  props: {
    catName: {
      type: String,
      default: `none`,
    },
  },
}
</script>

<style lang="scss">

  .category {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
    &__image-container {
      height: 250px;
      display: flex;
    }
    &__image {
      margin: auto;
      width: 100%;
      height: auto;
    }
    &__button {
      margin-bottom: 10px;
      padding: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 34px;
      font-weight: 500;
      // &--img {
      //   margin-left: 5px;
      // }
    }
  }

    @media (max-width: 1150px) {
    .category {
       &__button {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 1010px) {
    .category {
      min-height: 250px;
      &__image-container {
        height: 200px;
      }
       &__button {
        font-size: 25px;
      }
    }
  }
 @media (max-width: $smallScreen) {
   .category {
     &__button {
      font-size: 20px;
     }
   }
 }
</style>
