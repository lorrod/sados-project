<template>
  <div class="share-information">
    <div>
      <div class="share-information__head">
        <h3>Мы предлагаем</h3>
      </div>
      <br>
      <br>
      <div class="share-information__text">
        <p>ООО "САДОС" располагает большим парком спецтехники и оказывает услуги аренды специализированных транспортных средств различного назначения на территории Москвы и Московской области.</p>
        <br>
        <p>Мы на долговременной основе сотрудничаем со строительными, промышленными, дорожными, коммунальными организациями, предоставляя технику на взаимовыгодных условиях.</p>
      </div>
      <br>
      <br>
      <br>
      <br>
      <div class="share-information__button-about">
        <p>О компании</p>
        <img class="share-information__button-about--img" src="/next-button/next-button-light.svg" alt="show-info">
        <!-- <p class="share-information__button-about--circle">></p> --->
      </div>
    </div>
    <div class="share-information__order-call">
      <p>Заказать звонок</p>
      <img class="share-information__order-call--img" src="/phone/phone-menu.svg" alt="phone">
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
      font-size: 18px;
      font-weight: 600;
    }
    &__button-about {
      display: flex;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      &--img {
        margin-left: 27px;
      }
    }
    &__order-call {
      display: flex;
      //align-items: center;
      width: fit-content;
      //margin: 30px auto 30px auto;
      background-color: rgb(235,233,224);
      border-radius: 5px;
      padding: 20px 40px 20px 40px;
      font-weight: 600;
      &--img {
        margin-left: 10px;
        width: 16px;
        height: auto;
      }
    }
  }

  @media (max-width: 1010px) {
    .share-information {
      &__order-call {
        margin: 50px auto 50px auto;
      }
    }
  }
</style>
