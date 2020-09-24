<template>
  <div class="mainConteiner" v-scroll="handleScroll">
    <div  v-if="desktop"></div>
    <menubar />
    <container :class="showFirst"/>
    <container2 :class="showSecond"/>
    <container3 :class="showThird"/>
    <toTopButton class-name="container"/>
  </div>
</template>

<script>
import menubar from '@/components/menu/menubar.vue'
import Container from "@/components/container1/container";
import Container2 from "@/components/container2/container"
import Container3 from "@/components/container3/container"
import toTopButton from "@/components/to-top-button/to-top-button"
import imageCarousel from "@/components/image-carousel/__container"
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
      setScroll: '',
      coordY: 0,
      showFirst: '',
      showSecond: '',
      showThird: '',
      desktop: false,
    }
  },
  methods: {
    handleScroll() {
      if (window.innerWidth < 10830) {
        return
      }
      this.coordY += window.scrollY
      if (window.scrollY < 200) {
        this.showFirst = 'mainConteiner__container--shown mainConteiner__container--shown--main'
        this.showSecond = 'mainConteiner__container'
        this.showThird = 'mainConteiner__container'
        console.log('show first')
      } else if (window.scrollY > 200 && window.scrollY < 400) {
        this.showFirst = 'mainConteiner__container'
        this.showSecond = 'mainConteiner__container--shown mainConteiner__container--shown--secondary'
        this.showThird = 'mainConteiner__container'
        console.log('show second')
      } else if (window.scrollY > 400 && window.scrollY < 600) {
        this.showFirst = 'mainConteiner__container'
        this.showSecond = 'mainConteiner__container'
        this.showThird = 'mainConteiner__container--shown mainConteiner__container--shown--secondary'
        console.log('show third')
      } else if (window.scrollY > 600) {
        window.scrollTo(0,590);
      }

      // window.scrollTo(0,0);
      // document.querySelector('.'+className).scrollIntoView({block: "start", behavior: "smooth"});
      console.log(window.scrollY)
    }
  },
  mounted() {
    /*
    const scene = this.$scrollmagic.Scene({
      triggerElement: '.line'
    })
    .setClassToggle('.line', '.showhsohsohso')
    */
  }
}
</script>

<style lang="scss">

 .mainConteiner{
    overflow-x: hidden;// on MacOS Chrome and Safari dont require
    font-family: "Graphik LCG"; /* this was it */
   &__check {
     z-index: 50;
   }
 }


 @media (min-width: $mediumScreen) {
   .mainConteiner {
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
   }
 }

</style>


