<template>
  <div class="menubar">
    <div class="menubar--style">
      <div class="menubar__labels">
        <div class="menubar__btn-with-name">
          <div class="menubar__btn" @click.stop="showContent">
            <img class="menubar__btn--img" src="/menu/menu-btn.svg" alt="mail">
          </div>
          <div class="menubar__company">
            <p>ООО</p>
            <p class="menubar__company--brand">САДОС</p>
          </div>
        </div>
        <div class="menubar__contacts">
          <img class="menubar__contacts--img" src="/mobile-phone/mobile-phone-menu.svg" alt="mobile">
          <img class="menubar__contacts--img" src="/phone/phone-menu.svg" alt="phone">
          <img class="menubar__contacts--img" src="/envelope/envelope-menu.svg" alt="mail">
        </div>
      </div>
    </div>
    <div class="menubar__content" :class="active"  v-click-outside="hideContent">
      <nav class="menubar__options">
        <a class="menubar__options-href" href="#">Главная</a>
        <a class="menubar__options-href" href="#">Каталог техники</a>
        <a class="menubar__options-href" href="#">Контакты</a>
      </nav>
      <div class="menubar__information">
        <hr class="menubar__information--hr">
        <div class="menubar__information--contacts">
          <p class="menubar__information--email">info@ooosados.ru</p>
          <p class="menubar__information--phone">+7 (495) 116-16-59</p>
          <p class="menubar__information--phone">+7 (999) 888-55-33</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menubar",
  data() {
    return {
      active: '',
    }
  },
  methods: {
    showContent() {
      if (this.active === '') {
        this.active = 'menubar__content-active'
        return
      }
      this.active = ''
    },
    hideContent() {
      if (this.active === 'menubar__content-active') {
        this.active = ''
      }
    }
  }
}
</script>

<style lang="scss">
.menubar {
  position: fixed;
  overflow-x: hidden;
  &--style {
    position: relative;
    z-index: 10000;
    background-color: rgb(238,236,231);
    width: $menuWidth;
    height: 100vh;
  }
  &__labels {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__btn {
    position: relative;
    display: flex;
    width: $menuWidth;
    height: $menuWidth;
    background-color: #EEECE7;
    &--img {
      // display: block;
      // width: $menuWidth / 2;
      // height: $menuWidth / 2;
      margin: auto;
      // vertical-align:middle;
    }
  }
  &__content {//menubar__content--hr
    position: fixed;
    left: 0;
    top: 0;
    width: 40%;
    height: 100vh;
    z-index: 99;
    background-color: rgb(31,31,31);
    transition: 0.5s;
    transform: translateX(-100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-active {
      transform: translateX(0%);
    }
  }
  &__information {
    margin-bottom: 100px;
    &--hr {
      margin-left: $menuWidth + $menuWidth / 4;
      margin-right: $menuWidth / 4;
    }
    &--contacts {
      color: rgb(250,250,250);
      margin-left: $menuWidth + $menuWidth / 2;
      margin-right: $menuWidth / 2;
    }
    &--email {
      margin: 20px 0 20px 0;
    }
    &--phone {
      margin: 5px 0 5px 0;
    }
  }
  &__options {
    margin-top: 20px;
    margin-left: $menuWidth * 1.5;
    margin-right: $menuWidth / 4;
    display: flex;
    height: 50%;
    flex-direction: column;
    &-href{
      margin-top: 20px;
      color: rgb(250,250,250);
      text-decoration: none;
      font-weight: 900;
      font-size: 25px;
    }
  }
  &__company {
    color: #1F1F1F;
    transform: rotate(-90deg);
    display: flex;
    margin-top: 150px;
    font-size: 25px;
    &--brand {
      font-weight: bold;
      margin-left: 5px;
    }
  }
  &__contacts {
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-bottom: 33px;
    &--img {
      margin: 5px auto 5px auto;
      // width: 24px;// strange auto fit width
    }
  }
}

@media (max-width: $mediumScreen) {
  .menubar {
    min-width: 340px;
    &--style {
      background-color: rgb(238,236,231);
      width: 100vw;
      height: $menuMobileHeight;
    }
    &__btn-with-name {
      display: flex;
    }
    &__labels {
      flex-direction: row;
    }
    &__content {
      width: 100vw;
      height: 100vh;
      transition: 0.5s;
      transform: translateY(-100%);
      z-index: 5000;
    &-active {
      transform: translateY(0%);
      }
    }
    &__options {
    margin-top: $menuMobileHeight * 1.5;
    margin-left: $menuMobileHeight * 1.5;
    // margin-right: $menuWidth / 4;
    display: flex;
    height: 50%;
    flex-direction: column;
    &-href{
      margin-bottom: 20px;
      color: rgb(250,250,250);
      text-decoration: none;
      font-weight: 900;
      font-size: 25px;
      }
    }
    &__contacts {
      flex-direction: row;
      margin-bottom: 0;
      margin-right: 33px;
    &--img {
      margin: auto 5px auto 5px;
      width: 24px;// strange auto fit width
      height: 24px;
      }
    }
    &__company {
    transform: rotate(0deg);
    display: flex;
    margin: auto 5px auto 35px;
    }
    &__information {
      &--hr {
        margin-left: $menuMobileHeight + $menuMobileHeight / 4;
        margin-right: $menuMobileHeight + $menuMobileHeight / 4;
      }
    }
  }
}
</style>
