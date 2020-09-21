<template>
  <div class="share-information">
    <div>
      <div class="share-information__head">
        <h3>Мы предлагаем</h3>
      </div>
      <br>
      <div class="share-information__text">
        <p>ООО "САДОС" располагает большим парком спецтехники и оказывает услуги аренды специализированных транспортных средств различного назначения на территории Москвы и Московской области.</p>
        <br>
        <p>Мы на долговременной основе сотрудничаем со строительными, промышленными, дорожными, коммунальными организациями, предоставляя технику на взаимовыгодных условиях.</p>
      </div>
      <br>
      <br>
      <div class="share-information__button-about">
        <p>О компании</p>
        <img class="share-information__button-about--img" src="/next-button/circle-next-v2.png_48.png" alt="show-info">
        <!-- <p class="share-information__button-about--circle">></p> --->
      </div>
    </div>
    <div class="share-information__order-call">
      <p>Заказать звонок</p>
      <img class="share-information__order-call--img" src="/phone/phone-24.png" alt="phone">
    </div>
  </div>
</template>

<script>
export default {
  name: "shareInformation"
}
</script>

<style lang="scss">
  .share-information {
    width: 100%;
    height: 100%;
    margin-right: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    &__head {
      margin-bottom: 20px;
      font-size: 45px;
    }
    &__text {
      font-size: 14px;
      font-weight: 600;
    }
    &__button-about {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      &--img {
        margin-left: 10px;
      }
      &--circle {// old -- clean next time
        margin-left: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        background-color: rgb(235,233,224);
        border-radius: 50%;
      }
    }
    &__order-call {
      display: flex;
      align-items: center;
      width: fit-content;
      margin: 30px auto 30px auto;
      background-color: rgb(235,233,224);
      border-radius: 10px;
      padding: 10px 20px 10px 20px;
      font-weight: 600;
      &--img {
        margin-left: 10px;
        width: 16px;
        height: auto;
      }
    }
  }
</style>
