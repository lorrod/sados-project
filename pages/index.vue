<template>
  <div class="mainConteiner">
    <menubar @goToSection="scrollTo"/>
    <container class="mainConteiner__section mainConteiner__section--shown" />
    <container2 class="mainConteiner__section" />
    <container3 class="mainConteiner__section" />
    <toTopButton class="mainConteiner__toTopButton" class-name="container" />
  </div>
</template>

<script>
import menubar from '@/components/menu/menubar.vue'
import Container from "@/components/container1/container";
import Container2 from "@/components/container2/container"
import Container3 from "@/components/container3/container"
import toTopButton from "@/components/to-top-button/to-top-button"
import imageCarousel from "@/components/image-carousel/__container"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"


export default {
  components: {
    Container,
    Container2,
    Container3,
    toTopButton,
    menubar,
    imageCarousel,
  },
  data() {
    return {
      isGeneral: true
    }
  },
  methods: {
    scrollTo(container) {
      window.scrollTo(0,container*window.innerHeight)
    }
  },
  mounted() {

    let sections = gsap.utils.toArray(".mainConteiner__section"),
    currentSection = sections[0];

    gsap.defaults({overwrite: 'auto', duration: 0.3})

    // stretch out the body height according to however many sections there are.
    gsap.set("body", {height: (sections.length * 100) + "%"})
    gsap.registerPlugin(ScrollTrigger)

    // create a ScrollTrigger for each section
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        // when a new section activates (from either direction), set the section accordinglyl.
        onToggle: self => self.isActive && setSection(section),
      })
    })

    function setSection(newSection) {
      if (newSection !== currentSection) {
        if (sections.indexOf(newSection) != 0) {
          gsap.to('.mainConteiner__toTopButton', {opacity:1})
        } else {
          gsap.to('.mainConteiner__toTopButton', {opacity:0})
        }
        if (sections.indexOf(newSection) > sections.indexOf(currentSection)) {
          gsap.fromTo(currentSection, {y: 0, opacity: 1}, {y: '-300vh', opacity: 0, duration: 0.5})
          gsap.fromTo(newSection, {y: '300vh', opacity: 0}, {y:0, opacity: 1, duration: 0.5})
        } else {
          gsap.fromTo(currentSection, {y: 0, opacity: 1}, {y: '300vh', opacity: 0, duration: 0.5})
          gsap.fromTo(newSection, {y: '-300vh', opacity: 0}, {y:0, opacity: 1, duration: 0.5})
        }
        currentSection = newSection
        //window.scrollTo(0,sections.indexOf(newSection)*window.innerHeight)
        //setTimeout("console.log('stop please!')", 1000);
      }
    }

    // handles the infinite part, wrapping around at either end....
    /*
    ScrollTrigger.create({
      start: 1,
      end: () => ScrollTrigger.maxScroll(window) - 1,
      onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
      onLeave: self => self.scroll(2)
    }).scroll(2);*/
  },
}
</script>

<style lang="scss">

 .mainConteiner{
    overflow-x: hidden;// on MacOS Chrome and Safari dont require
    font-family: "Graphik LCG"; /* this was it */
    margin-bottom: 300vh;
    overflow-y: scroll;
    //-ms-overflow-style: none;  /* Internet Explorer 10+ */
    //scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      //display: none;  /* Safari and Chrome */
    }
    &__toTopButton {
      opacity: 0;
    }
    &__section {
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      &:not(.mainConteiner__section--shown) {
        opacity: 0;
        z-index: -20;
        right: 300px;
        transform: scale(0.8);
      }
      &--shown {
        left: -$menuWidth;
        padding-left: $menuWidth;
      }
    }
 }
 @media (max-width: $mediumScreen) {
   .mainConteiner {
        &__section {
          //position: static;
          &--shown {
            left: 0;
            padding-left: 0;
          }
        }
      }
    }
     /*
     &__container {
       opacity: 0;
       width: 100vw;
       position: block;

       &--shown {
         &--main {
           transform: translateX(-3%);
         }
         &--secondary {
           transform: translateX(2%);
         }
         z-index: -50;
         opacity: 100;
         width: 100vw;
         position: fixed;
         top: 0%;
         left: 0%;
         transition: 1s;
       }
     }

        */

</style>


