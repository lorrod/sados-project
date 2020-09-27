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
        <img class="information__numbers--img" src="/mobile-phone/mobile-phone.svg" alt="mobile">
        <p>+7 (999) 888-55-33</p>
      </div>
      <div class="information__numbers--rows">
        <img class="information__numbers--img" src="/phone/phone-light.svg" alt="phone">
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
    font-weight: 400;
    // width: 100%;
    // height: 100%;
    padding-right: 100px;
    padding-left: 60px;
    &__header {
      margin-bottom: 20px;
      &--title{
        font-size: 45px;
        font-weight: 400;
      }
      &--date {
        display: flex;
        white-space: pre;
        padding-top: 5px;
        font-size: 20px;
      }
    }
    &__header {
      &--bolder {
        font-weight: 400;
      }
    }
    &__numbers {
      margin-bottom: 60px;
      font-size: 22px;
      &--rows {
        padding: 5px 0 5px 0;
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
    @media (max-width: $mediumScreen) {
    .information {
      &__header {
        &--date {
          padding: 0;
        }
      }
    }
  }

</style>
