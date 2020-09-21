<template>
  <div class="category">
    <div class="category__image-container">
      <img class="category__image" :src="'/categories/'+catName+'.jpg'" :alt="catName">
    </div>
    <div class="category__button">
      <p>{{ catName }}</p>
      <img class="category__button--img" alt="show" src="/next-button/circle-next_48.png">
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
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    &__image-container {
      height: 250px;
      display: flex;
    }
    &__image {
      margin: auto;
      width: 80%;
      height: auto;
    }
    &__button {
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      &--img {
        margin-left: 5px;
      }
    }
  }
  @media (max-width: $smallScreen) {
    .category {
      &__image {
        width: 60%;
      }
    }
  }
</style>
