<template>
  <div class="container">
    <generalWindow />
    <rightWindow />
  </div>
</template>

<script>
import generalWindow from './__general-window'
import rightWindow from './__right-window'
import { mapMutations } from 'vuex'
export default {
  name: "container",
  components: {
    generalWindow,
    rightWindow,
  },
  data() {
    return {
      intervalId: '',
    }
  },
  methods: {
    ...mapMutations(['INCREMENT_IMAGE_INDEX']),

    startTimer() {
      this.intervalId = window.setInterval(()=>{this.INCREMENT_IMAGE_INDEX()}, 30000);
    },
    stopTimer() {
      window.clearInterval(this.intervalId)// not used
    },
  },
  mounted() {
    this.startTimer()
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  margin-left: $menuWidth;
  height: 100vh;
}

@media (max-width: $mediumScreen) {
  .container {
    flex-direction: column;
    margin: 0;
  }
}
</style>
