<template>
  <div class='circle-container'>
    <svg width="28" height="28" viewBox="-6 -6 28 28">
      <circle class="circle-container__circle" cx="7" cy="7" r="3" fill="none" stroke="#fff" v-bind:stroke-dasharray="dash+' '+gap" stroke-width="3" :transform="'rotate(0 7 7)'" />
    </svg>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filledSpace: 0, // кол-во заполненности круга
        circleRadius: 7, // радиус окружности
        intervalid1: null,
      }
    },
    computed: {
      circleLength () { // длина окружности
        return this.circleRadius*2*Math.PI
      },
      dash () { // черта
        return this.circleLength/100*this.filledSpace
      },
      gap () { // пробел
        return this.circleLength-this.dash
      },
    },
    methods: {
      increaseFill() {
        if (this.filledSpace <= 100) {
          this.filledSpace += 5
          return
        }
        this.filledSpace = 0
      }
    },
    mounted() {
      this.intervalid1 = setInterval(() => {
        this.increaseFill()
      }, 100);
    }
  }
</script>


<style lang="scss">

</style>
