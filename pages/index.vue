<template>
  <div class="mainConteiner" :class="setScroll" v-scroll="handleScroll">
    <menubar />
    <container />
    <container2 />
    <container3 />
    <toTopButton class-name="container"/>
  </div>
</template>

<script>
import menubar from '@/components/menu/menubar.vue'
import Container from "@/components/container1/container";
import Container2 from "@/components/container2/container"
import Container3 from "@/components/container3/container"
import toTopButton from "@/components/to-top-button/to-top-button"

export default {
  components: {
    Container,
    Container2,
    Container3,
    toTopButton,
    menubar
  },
  data() {
    return {
      setScroll: '',
      coordY: 0,
      showSection: 'first'
    }
  },
  methods: {
    handleScroll() {
      this.coordY += window.scrollY
      if (window.scrollY < 50) {
        this.showSection = 'first'
        console.log('show first')
      } else if (window.scrollY > 50 && window.scrollY < 100) {
        this.showSection = 'second'
        console.log('show second')
      } else if (window.scrollY > 100 && window.scrollY < 150) {
        this.showSection = 'third'
        console.log('show third')
      } else if (window.scrollY > 150) {
        // window.scrollTo(0,140);
      }

      // window.scrollTo(0,0);
      // document.querySelector('.'+className).scrollIntoView({block: "start", behavior: "smooth"});
      console.log(window.scrollY)
    }
  },
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
</style>

