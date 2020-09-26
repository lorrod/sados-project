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
     height: 35%;
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
/*
@mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}
*/
 @media (max-width: $smallScreen) {
   .categories {
     display: flex;
     flex-wrap: nowrap;
     position: relative;
     // width: 960px; ????
     	&::before,
      &::after {
        //@include white-gradient;
        bottom: 0;
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
      }

    animation: scroll 15s linear infinite;
      width: calc(350px * 6);
     left: 135%;
     &__category{
       min-width: 200px;
       max-width: 250px;
       height: 10px;
       border: none;
       margin:-1px 100px 0 100px;
     }
   }
 }



// Animation of scrolling vechicle
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-350px * 8))}
}


</style>
