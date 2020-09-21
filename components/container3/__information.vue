<template>
  <div class="information">
    <div class="information__header">
      <h3 class="information__header--title">На связи</h3>
      <div class="information__header--date">
        <p>Ежедневно с </p>
        <p class="information__header--bolder">9:00</p>
        <p> до </p>
        <p class="information__header--bolder">18:00</p>
      </div>
    </div>
    <div class="information__numbers">
      <div class="information__numbers--rows">
        <img class="information__numbers--img" src="/mobile-phone/mobile-phone-24_154-140-123.png" alt="mobile">
        <p>+7 (999) 888-55-33</p>
      </div>
      <div class="information__numbers--rows">
        <img class="information__numbers--img" src="/phone/phone-24_154-140-123.png" alt="phone">
        <p>+7 (495) 116-16-59</p>
      </div>
    </div>
    <div>
      <h3 class="information__header--title">Наша почта</h3>
      <div class="information__email">info@ooosados.ru</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "information"
}
</script>

<style lang="scss">
  .information {
    // width: 100%;
    // height: 100%;
    &__header {
      margin-bottom: 20px;
      &--title{
        font-size: 45px;
      }
      &--date {
        display: flex;
        white-space: pre;
      }
    }
    &__header {
      &--bolder {
        font-weight: 600;
      }
    }
    &__numbers {
      margin-bottom: 60px;
      &--rows {
        display: flex;
        align-items: center;
      }
      &--img {
        margin-right: 10px;
      }
    }
    &__email{
      color: rgb(154,140,123);
      width: fit-content;
      margin-top: 10px;
      font-size: 30px;
      font-weight: 600;
      border-bottom: 1px solid rgb(154,140,123);
    }
  }
</style>
