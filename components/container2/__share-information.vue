<template>
  <div class="share-information">
    <div class="share-information__text">
      <div class="share-information__head">
        <p>Мы предлагаем</p>
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
    <div class="share-information__order-call" @click="scrollNextSection()">
      <p>Заказать звонок</p>
      <img class="share-information__order-call--img" src="/phone/phone-menu.svg" alt="phone">
    </div>
  </div>
</template>

<script>
export default {
  name: "shareInformation",
  methods: {
    scrollNextSection() {
      window.scrollTo(0,window.innerHeight*2);
      //document.querySelector("."+section).scrollIntoView({block: "start", behavior:"smooth"});
    },
  }
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
    background-color: #FCFBF9;
    padding: 4% 0 4% 0;
    &__head {
      margin-bottom: 20px;
      font-size: 60px;
      font-weight: 600;
      font-style: normal;
    }
    &__text {
      font-size: 18px;
      font-weight: 400;
      max-width: 600px;
    }
    &__button-about {
      // display: flex;
      display: none;
      align-items: center;
      margin: 10px 10px 10px 0;
      font-size: 34px;
      //font-weight: 500;
      &--img {
        margin-left: 27px;
      }
    }
    &__order-call {
      display: flex;
      //align-items: center;
      width: fit-content;
      margin: auto 10px auto 0;
      background-color: rgb(235,233,224);
      border-radius: 5px;
      padding: 20px 40px 20px 40px;
      font-size: 18px;
      font-weight: 500;
      font-style: normal;
      cursor: pointer;
      &--img {
        margin-left: 10px;
        width: 16px;
        height: auto;
      }
      &:hover {
        background-color: #999999;
      }
    }
  }

  @media (min-width: $extraLargeScreen) {
    .share-information {
      &__head {
        font-size: 70px;
      }
      &__text {
        font-size: 23px;
      }
      &__button-about {
        font-size: 39px;
      }
      &__order-call {
        font-size: 23px;
      }
    }
  }

  @media (max-width: 1010px) {
    .share-information {
      padding: 0;
      &__text {
        margin: auto;
      }
      &__head {
        margin-top: 2px;
      }
      &__order-call {
        margin: 10px auto 10px auto;
      }
    }
  }
   @media (max-width: $smallScreen) {
     .share-information {
       &__head {
         font-size: 45px;
       }
       &__button-about {
         display: none;
       }
       &__order-call {
         display: none;
       }
     }
   }

</style>
