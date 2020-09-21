<template>
  <div class="right-window">
    <div class="right-window__image-container">
      <img class="right-window__image" src="/main-pictures/wood.jpg" alt="wood">
    </div>
    <div class="right-window__information">
      <div class="right-window__text">
        <p class="right-window__warning">18 +</p>
        <p class="right-window__explanation">Видов техники</p>
      </div>
      <hr>
      <div class="right-window__button">
        <img class="right-window__button--img" src="/dots/dots-50.png" alt="dots">
        <a class="right-window__button--href" href="#">Все виды техники</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "rightWindow"
}
</script>

<style lang="scss">
  .right-window {
    width: 30%;
    height: 100%;
    overflow: hidden;
    &__image-container {
      height: 70%;
      overflow: hidden;
    }
    &__image {
      height: 100%;
      width: auto;
    }
    &__button {
      display: flex;
      flex-direction: row;
      align-items: center;
      &--img {
        //margin: auto;
        width: 24px;
        height: 24px;
      }
      &--href {
        font-size: 12px;
        font-weight: 600;
        margin-left: 10px;
        text-decoration: none;
        color: rgb(30,30,30);
      }
    }
    &__information {
      height: 23%;
      margin: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__warning {
      font-size: 45px;
      font-weight: 900;
    }
    &__text {
      font-weight: 500;
    }
  }

  @media (max-width: $smallScreen) {
    .right-window {
      display: flex;
      width: 100%;
      height: 50%;
      &__image-container {
        width: 60%;
        height: 100%;
        overflow: hidden;
      }
      &__image {
        width: 100%;
        min-width: 290px;
        height: auto;
      }
      &__information {
        width: 30%;
        height: 75%;
      }
    }
  }
</style>
