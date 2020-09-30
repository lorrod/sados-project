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
import { gsap, TimelineLite } from 'gsap'

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
      timeline: tl,
      runningTimeLine: null,
      runningTimeLine2: null,
      animationTimeLine: null,
    }
  },
  props: {
    mobileWidth: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  watch: {
    mobileWidth(newValue) {
      console.log(newValue)
      if (newValue) {
        this.gsapCarousel()
      } else {
        console.log('clearing')
        //this.timeline.clear()
        //this.runningTimeLine2.kill()
        //this.timeline.to('.categories', {x:0,y:0})
        // this.timeline.restart()
        // this.timeline.to('.categories', {x:0,y:0})
        // this.timeline.to('.categories', {x:0,y:0})
        this.timeline.restart()
        this.timeline.progress(0);
        this.timeline.pause(0)
        this.runningTimeLine = false

      }

    }
  },
  methods: {
    gsapCarousel() {
      // console.log('checking active')
      // logthis.timeline.isActive()
      if (this.runningTimeLine) {
        return
      }
      // console.log('start running')
      if (this.animationTimeLine) {
       this.timeline.resume()
        this.runningTimeLine = true
       return
      }


      // this.timeline.set('.categories', {x:0}, )
      // this.animationTimeLine = this.timeline
      //   .fromTo('.categories__category', {x:-750}, {x:650, duration: 6, ease: "power0"})
      //   .fromTo('.categories__category', {x:650}, {x:-750, duration: 6, ease: "power0"})
      // this.runningTimeLine = true

      console.log('starting')
      this.timeline.set('.categories__category', {x: (i) => i * 250}, )
      this.animationTimeLine = this.timeline
        .to('.categories__category', {
          duration: 10,
          ease: "none",
          x: "+=1500", //move each box 500px to right
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 1490) //force x value to be between 0 and 500 using modulus
          },
          repeat: -1})


      // for (var i = 0; i < 5; i++) {
      //   console.log('moving')
      //   this.timeline
      //   .fromTo('.category_'+i.toString(), {x:0}, {x:"+=500", duration: 2, ease: "power4"})
      }
        //, stagger: {each: 0.1}})// parameters 'showFirst'
        //.fromTo('menubar__information--hr', {opacity:0}, {opacity:1}, 'showSecond')
        //.fromTo('.menubar__information--content', {y:500, opacity: 0}, {y:0, duration: 0.2, opacity: 1 , stagger: {each: 0.1}})// parameters 'showSecond'
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
     position:relative;
     //right: 100px;
     width: 1000px;
     	&::before,
      &::after {
        //@include white-gradient;
        bottom: 0;
        content: "";
        height: 100px;
        position: absolute;
        width: 998px;
        z-index: 2;
      }

    //animation: scroll 10s linear infinite;
      //width: 100%;
     //left: 135%;
     &__category{
      position:fixed;
      left:-250px;
       width: 200px;
       height: auto;
       //height: 10px;
       border: none;
       // margin:-1px 40px 0 40px;
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
