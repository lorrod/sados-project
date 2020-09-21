<template>
  <div class="categories">
    <category
      class="categories__category"
      v-for="(category, i) in this.list_cats"
      :key="i"
      :catName="category"
    />
  </div>
</template>

<script>
import category from './__category'
export default {
  name: "categories",
  components: {
    category,
  },
  data() {
    return {
      list_cats: ["Краны", "Манипуляторы", "Экскаваторы", "Длинномеры", "Сваебойки", "Погрузчики"]
    }
  }
}
</script>

<style lang="scss">
 .categories {
   width: 100%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   align-content:  flex-start;
   justify-content: center;

   &__category{
     width: 33%;
     height: 45%;
     border: 1px solid rgb(216,216,214);
     margin:-1px 0 0 -1px; // used for collapsing double lines
   }
 }
 @media (max-width: $mediumScreen) {
   .categories {
     &__category{
       width: 50%;
       height: 45%;
       border: 1px solid rgb(216,216,214);
       margin:-1px 0 0 -1px; // used for collapsing double lines
     }
   }
 }

 @media (max-width: $smallScreen) {
   .categories {
     &__category{
       width: 100%;
       height: 45%;
       border: 1px solid rgb(216,216,214);
       margin:-1px 0 0 -1px; // used for collapsing double lines
     }
   }
 }
</style>
