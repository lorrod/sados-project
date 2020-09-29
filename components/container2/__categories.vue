<template>
  <div class="categories" ref="categories">
    <category
      v-for="(category, i) in this.list_cats"
      :key="i"
      :class="'categories__category category_'+i.toString()"
      :catName="category"
    />
  </div>
</template>

<script>
import category from './__category'
import { TimelineLite } from 'gsap'

let tl = new TimelineLite()
tl.repeat(-1)
export default {
  name: "categories",
  components: {
    category,
  },
  data() {
    return {
      list_cats: ["Краны", "Манипуляторы", "Экскаваторы", "Длинномеры", "Сваебойки", "Погрузчики"],
      mobileWidth: false,
      timeline: tl,
    }
  },
  methods: {
    handleResizeContainer(event) {
      if (this.$refs.categories) {
        console.log(this.$refs.categories.clientWidth)
        if (this.$refs.categories.clientWidth < 575 ) {
          this.mobileWidth = false
          //console.log('setting false')
        } else {
          this.mobileWidth = true
        }
      }
    },
    gsapCarousel() {

      this.timeline
        .fromTo('.categories', {x:850}, {x:"-=2000", duration: 5})
      // for (var i = 0; i < 5; i++) {
      //   console.log('moving')
      //   this.timeline
      //   .fromTo('.category_'+i.toString(), {x:0}, {x:"+=500", duration: 2, ease: "power4"})
      }
        //, stagger: {each: 0.1}})// parameters 'showFirst'
        //.fromTo('menubar__information--hr', {opacity:0}, {opacity:1}, 'showSecond')
        //.fromTo('.menubar__information--content', {y:500, opacity: 0}, {y:0, duration: 0.2, opacity: 1 , stagger: {each: 0.1}})// parameters 'showSecond'
  },
  mounted() {
    if ((this.$refs.categories.clientWidth / this.$refs.categories.clientHeight) < 1.6 ) {
      this.mobileWidth = true
      this.gsapCarousel()
    }
    window.addEventListener('resize', this.handleResizeContainer)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResizeContainer)
  },
}
</script>

<style lang="scss">
 .categories {
   width: 100%;
   height: 100%;
   display: flex;
   flex-wrap: wrap;
   //align-content:  flex-start;
   justify-content: center;
   &__category{
     width: 33%;
     height: 43%;
     border: 1px solid rgb(216,216,214);
     margin:-1px 0 0 -1px; // used for collapsing double lines
   }
 }

 @media (max-width: 1010px) {
   .categories {
     &__category{
       width: 33%;
       height: 35%;
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
     //position: sticky;
     //right: 100px;
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

    //animation: scroll 10s linear infinite;
      width: 100%;
     //left: 135%;
     &__category{
       //position: fixed;
       //right:10px;
       min-width: 200px;
       max-width: 250px;
       height: 10px;
       border: none;
       margin:-1px 10px 0 10px;
       /*
       &:first-child {
         margin: -1px 125px 0 0;
       }
       &:last-child {
         margin: -1px 0 0 125px;
       }

        */
     }
   }
 }


/*
// Animation of scrolling vechicle
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-400px * 8))}
}
*/

</style>
