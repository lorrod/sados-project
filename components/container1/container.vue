<template>
  <div class="container">
    <generalWindow />
    <rightWindow />
  </div>
</template>

<script>
import generalWindow from './__general-window'
import rightWindow from './__right-window'

export default {
  name: "container",
  components: {
    generalWindow,
    rightWindow,
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  margin-left: $menuWidth;
  height: 100vh;
}

@media (max-width: $smallScreen) {
  .container {
    flex-direction: column;
    margin: 0;
  }
}
</style>
